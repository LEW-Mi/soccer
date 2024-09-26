import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Club {
  id: number;
  name: string;
  logo: string;
  link: string;
}

const ClubPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [club, setClub] = useState<Club | null>(null);

  useEffect(() => {
    fetch('/data/clubs.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const selectedClub = data.find((club: Club) => club.id === Number(id));
        setClub(selectedClub || null);
      })
      .catch((error) => console.error('Ошибка загрузки данных клуба:', error));
  }, [id]);

  if (!club) {
    return <div>Клуб не найден</div>;
  }

  return (
    <div>
      <h1>{club.name}</h1>
      <img src={club.logo} alt={`${club.name} логотип`} />
      {/* Добавьте дополнительную информацию о клубе при необходимости */}
    </div>
  );
};

export default ClubPage;