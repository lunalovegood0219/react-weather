import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css"
export default function Weather() {
    const defaults = {
      icon: "CLEAR_DAY",
      color: "goldenrod",
      size: 45,
      animate: true,
    };
  return (
    <div className="Weather">
      <h2>lisbon</h2>
      <div className="time">
        <ul>
          <li>saturday 15:48</li>
          <li>clear</li>
        </ul>
      </div>
      <div className="text-center">
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
       <span className="main-temp">25°C</span> 
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
