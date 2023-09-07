import React from "react";
//import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.css";
import "./Forcast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forcast(props) {
  function displayWeatherForcast(response) {
    console.log(response.data);
  }

  const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
  const longitude = props.coordinate.lon;
  const latitude = props.coordinate.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherForcast);

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
