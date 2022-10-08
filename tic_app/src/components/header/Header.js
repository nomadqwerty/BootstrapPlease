import React, { useRef, useEffect } from "react";
import Main1 from "../sections/Main1";
import Nav from "./Nav";
const Header = () => {
  let div_main1 = useRef();

  let showDropdown = (e) => {
    if (
      e.target.classList.contains("menuBtn") ||
      e.target.classList.contains("searchBtn")
    ) {
      div_main1.current.classList.toggle("hidden");
    } else {
      if (!div_main1.current.classList.contains("hidden")) {
        div_main1.current.classList.add("hidden");
      }
    }
  };
  useEffect(() => {
    // console.log(div_main1.current.classList);
  });

  return (
    <div onClick={showDropdown} className="container">
      <div className="row">
        {/* header */}
        <Nav />
        {/* <!-- menu dropdown --> */}
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div ref={div_main1} className="main1 hidden">
              <div className="menuList">list</div>
              <div className="search">search</div>
            </div>
          </div>
        </div>
        {/* section1  */}
        <Main1 />
      </div>
    </div>
  );
};

export default Header;
