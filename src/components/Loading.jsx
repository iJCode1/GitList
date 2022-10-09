import styled from 'styled-components';
import spinner from '../assets/img/tail-spin.svg';

const LoadingStyled = styled.div`
  /* border: 10px solid red; */
  position: fixed;
  inset: 0;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 1;
  .loading-text{
    font: var(--headline2-semi-bold);
  }
`;

function Loading({ isData }) {

  if(isData.length === 0){
    return (
      <LoadingStyled>
        <img src={spinner} alt="" width="150"/>
        <p className='loading-text'>Cargando...</p>
      </LoadingStyled>
    );
  }

  return null;
}

export default Loading;