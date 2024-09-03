import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PaddedComponent from '../components/MyComponent/PaddedComponent/PaddedComponent';
import Row from '../common/Row';
import Column from '../common/Column';

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
  </PaddedComponent>
);

export default Home;