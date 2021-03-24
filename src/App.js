import './App.css';

import NavBar from './Component/NavBar'
import Carousel from './Component/Carousel'
import GenreList from './Component/GenreList'
import NewsList from './Component/NewsList'
import HotNews from './Component/HotNews'
import NewsSource from './Component/NewsSource'

// import {
//   Divider
// } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Carousel></Carousel>
      {/* <Divider /> */}
      <GenreList></GenreList>
      <NewsList></NewsList>      
      <HotNews></HotNews>
      <NewsSource></NewsSource>
    </div>
  );
}

export default App;
