import styled from 'styled-components';
import ModalContent from './modal';

const FiltersStyled = styled.div`
  grid-area: filters;
  background-color: #67efa6;
`;

function Filters() {
  return (
    <FiltersStyled>
      <ModalContent />
      Filters
    </FiltersStyled>
  );
}

export default Filters;