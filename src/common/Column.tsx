import styled from 'styled-components';

const Column = styled.div`
  width: 100%;
  padding: 0 15px; /* Добавляем отступы для внутреннего содержимого */

  @media (max-width: 1200px) {
    padding: 0 10px; /* Изменяем отступы для меньших экранов */
  }

  @media (max-width: 992px) {
    padding: 0 8px; /* Изменяем отступы для еще меньших экранов */
  }

  @media (max-width: 768px) {
    padding: 0 5px; /* Изменяем отступы для мобильных устройств */
  }

  @media (max-width: 576px) {
    padding: 0 2px; /* Минимальные отступы для самых маленьких экранов */
  }
`;

export default Column;