import React from "react";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import Forcast from "./WeatherForcast"

export default function Weather(props) {
  const temp = props.api.temprature;

  return (
    <div className="Weather">
      <h2 className="text-center text-capitalize">{props.api.city}</h2>
      <div className="time">
        <ul>
          <li>
            <span className="text-capitalize">{props.api.description}</span>
          </li>
        </ul>
      </div>
      <div>
        <WeatherIcon code={props.api.icon} size={44} />
        <span className="main-temp">
          {Math.round(temp)}
        </span>
      </div>
      <div className="describtion">
        <ul>
          <li>humidity : {Math.round(props.api.humidity)} %</li>
          <li> wind : {Math.round(props.api.wind)} km/h</li>
        </ul>
      </div>
      <hr />
      <Forcast coordinate={props.api.coordinate} />
    </div>
  );
}
