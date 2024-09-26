import React, { useEffect, useState } from 'react';
import ClubCard from '../components/ClubCard/ClubCard';
import PaddedComponent from '../components/MyComponent/PaddedComponent/PaddedComponent';
import Row from '../common/Row';
import Column from '../common/Column';

interface Club {
  id: number;
  name: string;
  logo: string;
  link: string;
}

const Home: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    fetch('/data/clubs.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setClubs(data))
      .catch((error) => console.error('Ошибка загрузки данных клубов:', error));
  }, []);

  return (
    <PaddedComponent>
      <h1>Главная страница</h1>
      <Row style={{ justifyContent: 'center' }}>
        {clubs.map((club) => (
          <Column key={club.id} style={{ margin: '10px' }}>
            <ClubCard
              clubName={club.name}
              clubLogo={club.logo}
              clubLink={`/club/${club.id}`}
            />
          </Column>
        ))}
      </Row>
    </PaddedComponent>
  );
};

export default Home;