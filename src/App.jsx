import Filters from "./components/Filters";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepoList from "./components/Repo-List";
import Search from "./components/Search";
import { useState, useEffect } from 'react';
import { getUser, getRepos } from './services/user';

function App() {

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUser('ijcode1').then(({ data, isError }) => {
      if (isError) {
        console.error("No se ha encontrado al usuario indicado");
        return;
      }

      setUser(data);
    })
  }, []);

  useEffect(() => {
    getRepos('ijcode1').then(({ data, isError }) => {
      if (isError) {
        console.error("No se han encontrado los repos del usuario indicado");
        return;
      }

      setRepos(data);
    })
  }, [])

  return (
    <Layout>
      <Profile {...user} />
      <Filters />
      <RepoList repoList={repos} />
      <Search />
    </Layout>
  )
}

export default App
