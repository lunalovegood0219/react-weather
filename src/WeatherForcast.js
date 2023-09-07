import React from "react";
//import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.css"
import "./Forcast.css";
import WeatherIcon from "./WeatherIcon";
export default function Forcast() {
  return (
    <div className="weatger-forcast text-center">
      <div className="row">
        <div className="col">
          <div className="weather-forcast-day">sun</div>
          <span className="max-temperature">18°C </span>
          <span className="min-temperature">15°C</span>
          <div className="weather-icon">
            <WeatherIcon code="01d" size={29} />
          </div>
        </div>
      </div>
    </div>
  );
}
