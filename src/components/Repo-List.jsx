import styled from 'styled-components';
import RepoItem from './Repo-Item';

const RepoListStyled = styled.div`
  grid-area: repo-list;
  padding-block-start: 1.5rem;
`;

function RepoList({ repoList, search }) {

  let list = repoList;

  if (search !== '') {
    list = list.filter((repo) => {
      return repo.name.toLowerCase().search(search.toLowerCase()) >= 0;
    });
  }



  return (
    <RepoListStyled>
      {list.map((item) => {
        return <RepoItem {...item} key={item.id} />
      })}
    </RepoListStyled>
  )
}

export default RepoList
