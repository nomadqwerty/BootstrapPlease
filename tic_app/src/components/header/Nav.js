import React from "react";

const Nav = () => {
  return (
    <React.Fragment>
      <div className="col-lg-2 col-sm-2 col-2">
        <div className="box1">
          <i className="fa fa-bars menuBtn" aria-hidden="true"></i>
        </div>
      </div>
      <div className="col-lg-8 col-sm-8 col-8">
        <div className="box2">
          <img
            className="logo"
            src={require("../../css/images/icons8-globe-100.png")}
            alt="tic logo"
          />
          <h1 className="logoTxt">The Impact Church</h1>
        </div>
      </div>
      <div className="col-lg-2 col-sm-2 col-2">
        <div className="box3">
          <i className="fa fa-search searchBtn" aria-hidden="true"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
