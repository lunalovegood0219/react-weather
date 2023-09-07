import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const weatherIconMaping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SLEET",
    "09n": "SLEET",
    "10d": "RAIN",
    "10n": "RAIN",
    "11D": "RAIN",
    "11N": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={weatherIconMaping[props.code]}
      color="#212529"
      size={props.size}
      animate={true}
    />
  );
}
