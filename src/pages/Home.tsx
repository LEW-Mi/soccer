import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PaddedComponent from '../components/MyComponent/PaddedComponent/PaddedComponent';
import Row from '../common/Row';
import Column from '../common/Column';
import ClubCard from '../components/ClubCard/ClubCard';
import clubs from '../data/clubs.json'

const Home: React.FC = () => (
  <PaddedComponent>
    <h1>Home Page</h1>
    <Row>
      <Column>
        <Button
          variant="contained" 
          color="primary" 
          style={{ width: '100%', marginBottom: '20px' }}
          component={Link} to="/video">
          Go to Video Page 
        </Button>
      </Column>
    </Row>
    <Row>
      <Column>
        <Button
          variant="contained" 
          color="primary" 
          style={{ width: '100%', marginBottom: '20px' }}
          component={Link} to="/about">
          Go to About Page 
      </Button>
      </Column>
    </Row>
    <Row>
      <Column>
        <Button
          variant="contained" 
          color="primary" 
          style={{ width: '100%', marginBottom: '20px' }}
          component={Link} to="/club">
          Go to Club Page 
      </Button>
      </Column>
    </Row>
    <Row>
      {clubs.map(club => (
        <Column key={club.id}>
          <ClubCard 
            clubName={club.name} 
            clubLogo={club.logo} 
            clubLink={club.link} 
          />
        </Column>
      ))}
    </Row>
  </PaddedComponent>
);

export default Home;