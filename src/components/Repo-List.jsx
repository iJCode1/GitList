import styled from 'styled-components';
import RepoItem from './Repo-Item';

const RepoListStyled = styled.div`
  grid-area: repo-list;
  padding-block-start: 1.5rem;
`;

function RepoList({ repoList }) {

  return (
    <RepoListStyled>
      {repoList.map((item) => {
        return <RepoItem {...item} key={item.id}/>
      })}
    </RepoListStyled>
  )
}

export default RepoList
