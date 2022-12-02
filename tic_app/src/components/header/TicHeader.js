import React from "react";

import "../../css/navBar.css";

const Nav = () => {
  return (
    <div>
      <div className="navContainer">
        <div className="row">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-12">
              <div className="navBar">
                <h1 className="ticLogoTxt">T I C</h1>

                <img
                  className="WorldLogo"
                  src={require("../../css/images/icons8-globe-100.png")}
                  alt="WorldLogo"
                ></img>

                <div className="iconContainer">
                  <div className="iconWrapper">
                    <i className="fa-solid fa-bars" aria-hidden="true"></i>
                  </div>
                  <div className="iconWrapperContact">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

export default Header;
