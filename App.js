import React from 'react';

import "./styles.css"

import Header from "./components/Header";
import DemoCarousel from "./components/Carousel";
import Footer from "./Footer";
import ListDividers from "./components/List";


const App = () => [<div className="App">
  <Header />
      <div>
        <div id="left-div">
        <ListDividers/>
      </div>

    <div id="center-div">
    <DemoCarousel />
    </div>

          <footer></footer>
      </div>


</div>,


]
;

export default App;
