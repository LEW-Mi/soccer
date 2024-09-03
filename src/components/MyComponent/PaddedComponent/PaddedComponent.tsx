import React, { ReactNode } from 'react';
import { Container } from './PaddedComponent.styles';
import Row from '../../../common/Row';
import Column from '../../../common/Column';

interface PaddedComponentProps {
  children: ReactNode;
}

const PaddedComponent: React.FC<PaddedComponentProps> = ({ children }) => {
  return (
    <Container>
      <Row>
        <Column>
          {children}
        </Column>
      </Row>
    </Container>
  );
};

export default PaddedComponent;