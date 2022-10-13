import React from "react";

const TimeAndDate = () => {
  return (
    <div>
      <div className="name">
        <div className="infoName">
          <p1>Impact Sunday Service</p1>
        </div>
      </div>
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

export default TimeAndDate;
