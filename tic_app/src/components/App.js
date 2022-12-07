import React, { useRef, useEffect } from "react";
import "../css/desktop.css";
import "../css/tablet.css";
import "../css/mobile.css";

import TicHeader from "./header/TicHeader";

import Header from "./header/Header";
import Main1 from "./sections/Main1";
import Main2 from "./sections/Main2";
import Main3 from "./sections/Main3";
import Main4 from "./sections/main4";

import BookTraining from "./form/Form";
const App = () => {
  useEffect(() => {
    let app = document.querySelector(".App");
    let burger = document.querySelector(".MenuContainer");
    app.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("iconWrapper") ||
        e.target.classList.contains("fa-bars") ||
        e.target.classList.contains("MenuContainer") ||
        e.target.classList.contains("fa-phone")
      ) {
        return;
      } else {
        if (!burger.classList?.contains("hidden")) {
          burger.classList.add("hidden");
          return;
        }
      }
    });
  });
  return (
    <React.Fragment>
      <div className="App">
        {/* <Header /> */}
        {/* <Main1 /> */}
        {/* <Main2 /> */}
        {/* <Main3 /> */}
        {/* <Main4 /> */}

        {/* header */}
        <TicHeader />

        {/* Training Form */}
        {/* <BookTraining /> */}
      </div>
    </React.Fragment>
  );
};

export default App;
