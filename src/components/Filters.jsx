import styled from 'styled-components';
import InputText from './Input-text';
import Divider from './Divider';
import Selector from './Selector';

const FiltersStyled = styled.div`
  grid-area: filters;
  .filter-title{
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin: 0;
  }
  
  .action-list{
    margin-block: 1.5rem;
    display: flex;
    gap: 1rem;
  }

  .filter-list{
    display: flex;
    gap: .5rem
  }
`;

function Filters({ repoListCount = 70 }) {
  return (
    <FiltersStyled>
      <h2 className="filter-title">Repositorios {repoListCount}</h2>
      <div className="action-list">
        <InputText
          placeholder='Cards de precios'
          type="search"
        />

        <div className="filter-list">
          <Selector>
            <option selected disabled>Tipo</option>
            <option value="todos">Todos</option>
            <option value="sources">Sources</option>
            <option value="forks">Forks</option>
            <option value="archived">Archived</option>
            <option value="mirrors">Mirrors</option>
          </Selector>

          <Selector>
            <option selected disabled>Lenguaje</option>
            <option value="todos">Todos</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
          </Selector>

          <Selector>
            <option selected disabled>Ordenar</option>
            <option value="actualizados">Actualizados</option>
            <option value="nombre">Nombre</option>
            <option value="estrellas">Estrellas</option>
          </Selector>
        </div>
      </div>
      <Divider />
    </FiltersStyled>
  );
}

export default Filters;