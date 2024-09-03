import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PaddedComponent from '../components/MyComponent/PaddedComponent/PaddedComponent';
import Row from '../common/Row';
import Column from '../common/Column';

const Club: React.FC = () => (
  <PaddedComponent>
    <Row>
      <Column>
        <h1>Club Page</h1>
        <Button 
        variant="contained" 
        color="primary" 
        style={{ width: '100%' }}
        component={Link} to="/">
          Go to Home Page
        </Button>
      </Column>
    </Row>
  </PaddedComponent>
);

export default Club;