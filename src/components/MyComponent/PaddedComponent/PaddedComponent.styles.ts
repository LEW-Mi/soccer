import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

