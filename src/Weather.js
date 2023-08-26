import React from "react";
import "./Weather.css"
export default function Weather() {
  return (
    <div className="Weather">
      <h2>lisbon</h2>
      <div className="time">
        <ul>
          <li>saturday 15:48</li>
          <li>clear</li>
        </ul>
      </div>
      <div className="describtion">
        <ul>
          <li>Precipitation : 44%</li>
          <li> wind : 11 km/h</li>
        </ul>
      </div>
    </div>
  );
}
