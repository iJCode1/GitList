import Filters from "./components/Filters";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepoList from "./components/Repo-List";
import Search from "./components/Search";
import { useState, useEffect } from 'react';
import { getUser, getRepos } from './services/user';
import { useParams } from "react-router-dom";
import Modal from "./Modal";

function App() {

  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");

  const params = useParams();
  let userParam = params.user;

  if (!userParam) {
    userParam = "ijcode1";
  }

  useEffect(() => {
    getUser(userParam).then(({ data, isError }) => {
      if (isError) {
        console.error("No se ha encontrado al usuario indicado");
        return;
      }

      setUser(data);
    });

    getRepos(userParam).then(({ data, isError }) => {
      if (isError) {
        console.error("No se han encontrado los repos del usuario indicado");
        return;
      }

      setRepos(data);
    });
  }, [userParam])

  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters setSearch={setSearch} repoListCount={repos.length} setLanguage={setLanguage} />
      <RepoList repoList={repos} search={search} language={language} />
      <Search setModal={setModal} />
    </Layout>
  )
}

export default App
