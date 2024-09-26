import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import iconv from 'iconv-lite';
import cron from 'node-cron';

interface Team {
  position: number;
  name: string;
  logo: string;
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: string;
  points: number;
}

const scrapeTableData = async () => {
  try {
    // Получаем HTML-страницу с кодировкой Windows-1251
    const response = await axios.get('http://fapl.ru/table/', {
      responseType: 'arraybuffer',
    });
    // Декодируем данные в UTF-8
    const decodedData = iconv.decode(response.data, 'windows-1251');
    const $ = cheerio.load(decodedData);

    const teams: Team[] = [];

    // Определяем пути к директориям
    const logosDir = path.join(__dirname, '..', 'public', 'logos');
    const dataDir = path.join(__dirname, '..', 'public', 'data');

    // Проверяем и создаём директории, если их нет
    if (!fs.existsSync(logosDir)) {
      fs.mkdirSync(logosDir, { recursive: true });
    }
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    $('#content table.positions tbody tr').each((index, element) => {
      const positionText = $(element).find('td:nth-child(1) strong').text().trim();
      const position = parseInt(positionText);
      const teamCell = $(element).find('td:nth-child(2)');
      const name = teamCell.find('a').text().trim();
      const logoUrl = teamCell.find('a img').attr('src');

      // Проверяем, что logoUrl определён
      if (!logoUrl) {
        console.warn(`Логотип команды "${name}" не найден. Пропуск команды.`);
        return;
      }

      // Составляем полную ссылку на логотип
      const logoAbsoluteUrl = new URL(logoUrl, 'http://fapl.ru').href;

      // Имя файла для сохранения логотипа
      const logoFilename = `logo_${position}.png`;
      const logoPath = path.join(logosDir, logoFilename);

      const matches = parseInt($(element).find('td:nth-child(3)').text().trim());
      const wins = parseInt($(element).find('td:nth-child(4)').text().trim());
      const draws = parseInt($(element).find('td:nth-child(5)').text().trim());
      const losses = parseInt($(element).find('td:nth-child(6)').text().trim());
      const goalsFor = parseInt($(element).find('td:nth-child(7)').text().trim());
      const goalsAgainst = parseInt($(element).find('td:nth-child(8)').text().trim());
      const goalDifference = $(element).find('td:nth-child(9)').text().trim();
      const points = parseInt($(element).find('td:nth-child(10)').text().trim());

      teams.push({
        position,
        name,
        logo: `/logos/${logoFilename}`,
        matches,
        wins,
        draws,
        losses,
        goalsFor,
        goalsAgainst,
        goalDifference,
        points,
      });

      // Скачиваем логотип команды
      downloadImage(logoAbsoluteUrl, logoPath);
    });

    // Сортируем команды по очкам в порядке убывания
    teams.sort((a, b) => b.points - a.points);

    // Сохраняем данные в файл teams.json
    const dataPath = path.join(dataDir, 'teams.json');
    fs.writeFileSync(dataPath, JSON.stringify(teams, null, 2), 'utf-8');

    console.log('Данные таблицы успешно обновлены');
  } catch (error) {
    console.error('Ошибка при скрейпинге таблицы:', error);
  }
};

const downloadImage = async (url: string, filepath: string) => {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    await new Promise<void>((resolve, reject) => {
      response.data
        .pipe(fs.createWriteStream(filepath))
        .on('finish', () => resolve())
        .on('error', (e: any) => reject(e));
    });
  } catch (error) {
    console.error(`Ошибка при скачивании изображения ${url}:`, error);
  }
};

// Планируем обновление данных каждые 10 минут
cron.schedule('*/10 * * * *', () => {
  console.log('Запуск обновления таблицы...');
  scrapeTableData();
});

// Первый запуск при старте скрипта
scrapeTableData();