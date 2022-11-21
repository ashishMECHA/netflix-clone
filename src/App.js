
import Header from './components/header/header';
import Navbar from './components/nav/Navbar'
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "7ef4ae699d4aaa65a5a00a265aab8796",
};

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
