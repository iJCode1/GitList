import Filters from "./components/Filters";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepoList from "./components/Repo-List";
import Search from "./components/Search";

function App() {

  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList />
      <Search />
    </Layout>
  )
}

export default App
