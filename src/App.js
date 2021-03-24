import './App.css';

import NavBar from './Component/NavBar'
import Carousel from './Component/Carousel'
import GenreList from './Component/GenreList'
import NewsList from './Component/NewsList'
import HotNews from './Component/HotNews'
import NewsSource from './Component/NewsSource'
import Footer from './Component/Footer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Carousel></Carousel>      
      <GenreList></GenreList>
      <NewsList></NewsList>      
      <HotNews></HotNews>
      <NewsSource></NewsSource>
      <Footer></Footer>
    </div>
  );
}

export default App;
