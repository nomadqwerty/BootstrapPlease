import React, { useRef, useEffect } from "react";
import "../css/desktop.css";
import "../css/tablet.css";
import "../css/mobile.css";

import Header from "./header/Header";
import Main1 from "./sections/Main1";
import Main2 from "./sections/Main2";

const App = () => {
  const hideDropDown = (e) => {
    const main1 = document.querySelector(".main1");

    if (!main1.classList.contains("hidden")) {
      if (e.target.classList.contains("main2")) {
        main1.classList.add("hidden");
      }
    }
  };
  return (
    <React.Fragment>
      <div onClick={hideDropDown}>
        <Header />
        <Main1 />
        <Main2 />
      </div>
    </React.Fragment>
  );
};

export default App;
