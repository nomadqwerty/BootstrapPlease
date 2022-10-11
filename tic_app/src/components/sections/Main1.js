import React from "react";

const TimeAndDate = () => {
  return (
    <div>
      <div className="timeDescription">
        <div className="info">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <p1>Date: every Sunday</p1>
        </div>
        <div className="info">
          <i className="fa fa-clock" aria-hidden="true"></i>
          <p1>Time: 7:00AM</p1>
        </div>
      </div>
      <div className="Address">
        <div className="infoAddress">
          <i class="fa fa-map-signs" aria-hidden="true"></i>
          <p1>Address:</p1>
        </div>
        <div className="infoAddress"></div>
        <div className="addressText">
          <p1>
            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          </p1>
        </div>
      </div>
    </div>
  );
};

const Main1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="main2">
              <TimeAndDate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
