import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const iconMaping = {
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
      icon={iconMaping[props.code]}
      color="#212529"
      size={45}
      animate={true}
    />
  );
}
