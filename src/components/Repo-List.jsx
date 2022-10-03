import styled from 'styled-components';
import RepoItem from './Repo-Item';

const RepoListStyled = styled.div`
  grid-area: repo-list;
  background-color: #6767ef;
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
