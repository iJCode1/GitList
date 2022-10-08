import styled from 'styled-components';
import NoRepos from './NoRepos';
import RepoItem from './Repo-Item';

const RepoListStyled = styled.div`
  grid-area: repo-list;
  padding-block-start: 1.5rem;
`;

function RepoList({ repoList, search, language }) {

  let list = repoList;

  if (search !== '') {
    list = list.filter((repo) => {
      return repo.name.toLowerCase().search(search.toLowerCase()) >= 0;
    });
  }

  if (language !== '' && language !== 'todos') {
    list = list.filter((repo) => {
      if (repo.language) {
        return repo.language.toLowerCase() === language
      }
    });
  }

  if (!list.length > 0){
    return <NoRepos/>
  }
    // console.log(list.length);

    return (
      <RepoListStyled>
        {list.map((item) => {
          return <RepoItem {...item} key={item.id} />
        })}
      </RepoListStyled>
    )
}

export default RepoList
