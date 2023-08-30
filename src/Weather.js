import React from "react";
import "./Weather.css"
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import Unit from "./Unit"
export default function Weather(props) {
    
  return (
    <div className="Weather">
      <h2 className="text-center text-capitalize">{props.city}</h2>
      <div className="time">
        <ul className="text-center">
          <li><FormatedDate /> </li>
          <li>
            <span className="text-capitalize">{props.api.description}</span> 
          </li>
        </ul>
      </div>
      <div className="text-center">
        <WeatherIcon code={props.api.icon}/>
        <span className="main-temp">{Math.round(props.api.temprature)}°C</span>
      </div>
      <div className="describtion">
        <ul className="text-center">
          <li>humidity : {Math.round(props.api.humidity)} %</li>
          <li> wind : {Math.round(props.api.wind)} km/h</li>
        </ul>
      </div>
      <div>
        <Unit />
        </div>
    </div>
  );
}
