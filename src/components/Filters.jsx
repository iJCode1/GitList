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
    display: none;
  }
  
  .action-list{
    margin-block: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block-start: 2.5rem;
    & input{
      flex: 1;
    }
  }

  .filter-list{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem
  }

  @media screen and (min-width: 768px){
    .filter-title{
      display: block;
    }

    .action-list{
      flex-direction: row;
      margin-block-start: 1.5rem;

      & input{
        align-self: center;
      }
    }
  }
`;

function Filters({ setSearch, repoListCount = 70, setLanguage }) {

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <FiltersStyled>
      <h2 className="filter-title">Repositorios ({repoListCount})</h2>
      <div className="action-list">
        <InputText
          placeholder='Cards de precios'
          type="search"
          onChange={handleChange}
        />

        <div className="filter-list">
          <Selector defaultValue="">
            <option value="" disabled>Tipo</option>
            <option value="todos">Todos</option>
            <option value="sources">Sources</option>
            <option value="forks">Forks</option>
            <option value="archived">Archived</option>
            <option value="mirrors">Mirrors</option>
          </Selector>

          <Selector setLanguage={setLanguage} defaultValue="">
            <option value="" disabled>Lenguaje</option>
            <option value="todos">Todos</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
            <option value="dart">Dart</option>
          </Selector>

          <Selector defaultValue="">
            <option value="" disabled>Ordenar</option>
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