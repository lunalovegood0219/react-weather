import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDay(props) {
    return (<div>
        <div className="weather-forcast-day">{props.forcastData.daily[0].dt}</div>
            <span className="max-temperature">
              {props.forcastData.daily[0].temp.max}°C{" "}
            </span>
            <span className="min-temperature">
              {props.forcastData.daily[0].temp.min}°C
            </span>
            <div className="weather-icon">
              <WeatherIcon code={props.forcastData.daily[0].weather[0].icon} size={29} />
            </div>
            </div>
    )
}
