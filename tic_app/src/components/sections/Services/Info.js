import React from "react";

const TimeAndDate = () => {
  return (
    <div>
      <div className="name">
        <div className="infoName">
          <p>Impact Sunday Service</p>
        </div>
      </div>
      <div className="timeDescription">
        <div className="info">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <p>Date: every Sunday</p>
        </div>
        <div className="info">
          <i className="fa fa-clock" aria-hidden="true"></i>
          <p>Time: 7:00AM</p>
        </div>
      </div>
      <div className="Address">
        <div className="infoAddress">
          <i className="fa fa-map-signs" aria-hidden="true"></i>
          <p>Address:</p>
        </div>
        <div className="infoAddress"></div>
        <div className="addressText">
          <p>#4 Ken Saro-Wiwa Stadium Road, Port Harcourt</p>
        </div>
      </div>
    </div>
  );
};

export default TimeAndDate;
