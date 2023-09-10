import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcatDay.css";

export default function WeatherForcastDay(props) {
  function weatherForcastDay() {
    const date = new Date(props.forcastData.dt * 1000);
    const day = date.getDay();
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    return days[day];
  }
  function maxTemperature() {
    const temperature = Math.round(props.forcastData.temp.max);
    return `${temperature}°C `;
  }
  function minTemperature() {
    const temperature = Math.round(props.forcastData.temp.min);
    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="weather-forcast-day text-capitalize">
        {weatherForcastDay()}
      </div>
      <div className="weather-icon">
        <WeatherIcon code={props.forcastData.weather[0].icon} size={29} />
      </div>
      <span className="temperatures">
        <span className="max-temperature">{maxTemperature()} </span>
        <span className="min-temperature opacity-75"><small>{minTemperature()}</small> </span>
      </span>
    </div>
  );
}
