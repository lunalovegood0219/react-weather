import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css"
export default function Weather(props) {
    const defaults = {
      icon: "CLEAR_DAY",
      color: "goldenrod",
      size: 45,
      animate: true,
    };
  return (
    <div className="Weather">
      <h2 className="text-center">{props.city}</h2>
      <div className="time">
        <ul className="text-center">
          <li>saturday 15:48</li>
          <li>
            descripe: <br /> {props.api.description}
          </li>
        </ul>
      </div>
      <div className="text-center">
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
        <span className="main-temp">{Math.round(props.api.temprature)}°C</span>
      </div>
      <div className="describtion">
        <ul className="text-center">
          <li>humidity : {Math.round(props.api.humidity)} %</li>
          <li> wind : {Math.round(props.api.wind)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
