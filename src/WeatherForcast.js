import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Forcast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forcast, setForcast] = useState(null);

  function displayWeatherForcast(response) {
    setLoaded(true);
    setForcast(response.data);
    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="weather-forcast text-center">
        <div className="row">
          <div className="col">
            <div className="weather-forcast-day"></div>
            <span className="max-temperature">
              {forcast.daily[0].temp.max}°C{" "}
            </span>
            <span className="min-temperature">
              {forcast.daily[0].temp.min}°C
            </span>
            <div className="weather-icon">
              <WeatherIcon code={forcast.daily[0].weather[0].icon} size={29} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    const longitude = props.coordinate.lon;
    const latitude = props.coordinate.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherForcast);
  }
}
