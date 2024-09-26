import React, { useEffect, useState } from 'react';
import './TablePage.css';

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

const TablePage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch('/data/teams.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setTeams(data))
      .catch((error) => console.error('Ошибка загрузки таблицы:', error));
  }, []);

  return (
    <div className="table-page">
      <h1>Турнирная таблица Премьер-Лиги сезона 2024/25</h1>
      <table className="league-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Команда</th>
            <th>И</th>
            <th>В</th>
            <th>Н</th>
            <th>П</th>
            <th>З</th>
            <th>Пр</th>
            <th>Р</th>
            <th>О</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.position}>
              <td>{team.position}</td>
              <td className="team-cell">
                <img src={team.logo} alt={team.name} className="team-logo" />
                {team.name}
              </td>
              <td>{team.matches}</td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalDifference}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;