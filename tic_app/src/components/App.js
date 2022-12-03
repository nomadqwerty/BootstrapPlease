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
  const hideDropDown = (e) => {
    const main1 = document.querySelector(".main1");

    if (!main1?.classList.contains("hidden")) {
      if (e.target.classList.contains("main2")) {
        main1.classList.add("hidden");
      }
    }
  };
  return (
    <React.Fragment>
      <div onClick={hideDropDown}>
        {/* <Header /> */}
        {/* <Main1 /> */}
        {/* <Main2 /> */}
        {/* <Main3 /> */}
        {/* <Main4 /> */}

        {/* header */}
        {/* <TicHeader /> */}

        {/* Training Form */}
        <BookTraining />
      </div>
    </React.Fragment>
  );
};

export default App;
