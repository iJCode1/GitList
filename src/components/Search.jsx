import styled from 'styled-components';
import { ButtonRounded } from './Button';
import Icon from './icons/Index';

const SearchStyled = styled.div`
  position: fixed;
  inset-block-end: 1.5rem;
  inset-inline-end: 1.5rem;
`;

function Search({ setModal }) {

  function handleClick() {
    setModal(true);
  }

  return (
    <SearchStyled onClick={handleClick}>
      <ButtonRounded icon={<Icon icon="search" size="24" color="var(--white)"/>} />
    </SearchStyled>
  );
}

export default Search;