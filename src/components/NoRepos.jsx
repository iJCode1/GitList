import styled from 'styled-components';
import noDataImage from '../assets/img/noData.svg'

const NoReposStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-block: 2rem;
  gap: 2.5rem;

  .title{
    font: var(--headline2-semi-bold);
    margin: 0;
  }
`;

function NoRepos() {
  return (
    <NoReposStyled>
      <h2 className='title'>No se encontraron resultados</h2>
      <img src={noDataImage} alt="No Data" width="220" />
    </NoReposStyled>
  );
}

export default NoRepos;