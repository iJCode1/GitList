import Filters from "./components/Filters";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import RepoList from "./components/Repo-List";
import Search from "./components/Search";
import repoData from "./components/repo-data";

// const repoList = [
//   {
//     id: 1234,
//     name: "Mi primer proyecto con React.js"
//   },
//   {
//     id: 1235,
//     name: "Mi segundo proyecto con React.js"
//   },
// ];

function App() {

  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoData} />
      <Search />
    </Layout>
  )
}

export default App
