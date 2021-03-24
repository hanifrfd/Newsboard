import './App.css';

import NavBar from './component/NavBar'
import Carousel from './component/Carousel'
import GenreList from './component/GenreList'
import NewsList from './component/NewsList'
import HotNews from './component/HotNews'
import NewsSource from './component/NewsSource'

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
