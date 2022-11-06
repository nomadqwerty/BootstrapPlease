import React, { Component } from "react";
import Carousel from "./Slide";

import "swiper/css/bundle";
import "../Components/css/styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}

export default App;
