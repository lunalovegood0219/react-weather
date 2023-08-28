import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.css"
import "./Forcast.css";
export default function Forcast() {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "black",
    size: 51,
    animate: true,
  };
  const partlyCloudyDay = {
    icon: "PARTLY_CLOUDY_DAY",
    color: "balck",
    size: 51,
    animate: true,
  };
  const cloudy = {
    icon: "CLOUDY",
    color: "balck",
    size: 51,
    animate: true,
  };
  const rain = {
    icon: "RAIN",
    color: "balck",
    size: 51,
    animate: true,
  };
  const sleet = {
    icon: "SLEET",
    color: "balck",
    size: 51,
    animate: true,
  };
  return (
    <div className="container">
      <div className="row Forcast-icon">
        <div className="col-2">
          <center>
            sun <br /> 18°
          </center>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
        <div className="col-2">
          <center>
            mon <br /> 18°
          </center>
          <ReactAnimatedWeather
            icon={partlyCloudyDay.icon}
            color={partlyCloudyDay.color}
            size={partlyCloudyDay.size}
            animate={partlyCloudyDay.animate}
          />
        </div>
        <div className="col-2">
          <center>
            tue <br /> 18°
          </center>
          <ReactAnimatedWeather
            icon={cloudy.icon}
            color={cloudy.color}
            size={cloudy.size}
            animate={cloudy.animate}
          />
        </div>
        <div className="col-2">
          <center>
            wed <br /> 18°
          </center>
          <ReactAnimatedWeather
            icon={rain.icon}
            color={rain.color}
            size={rain.size}
            animate={rain.animate}
          />
        </div>

        <div className="col-2">
          <center>
            thu <br /> 18°
          </center>
          <ReactAnimatedWeather
            icon={sleet.icon}
            color={sleet.color}
            size={sleet.size}
            animate={sleet.animate}
          />
        </div>
      </div>
    </div>
  );
}
