import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcatDay.css";

export default function WeatherForcastDay(props) {
  function weatherForcastDay() {
    const date = new Date(props.forcastData.daily[0].dt * 1000);
    const day = date.getDay();
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    return days[day];
  }
  function maxTemperature() {
    const temperature = Math.round(props.forcastData.daily[0].temp.max);
    return `${temperature}°C `;
  }
  function minTemperature() {
    const temperature = Math.round(props.forcastData.daily[0].temp.min);
    return  `${temperature}°C`;
  }

  return (
    <div>
      <div className="weather-forcast-day">{weatherForcastDay()}</div>
      <div className="weather-icon">
        <WeatherIcon
          code={props.forcastData.daily[0].weather[0].icon}
          size={29}
        />
      </div>
      <span className="temperatures">
      <span className="max-temperature">{maxTemperature()} </span>
      <span className="min-temperature">{minTemperature()}</span>
      </span>
    </div>
  );
}
