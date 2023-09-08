import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Forcast.css";
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";

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
          {forcast.map(function(dailyForcast, index){
            return(
              <div className="col" key={index}>
                {index}
            <WeatherForcastDay forcastData={dailyForcast} />
          </div>
            )
          })}
          
        </div>
      </div>
    );
  } else {
    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    const longitude = props.coordinate.lon;
    const latitude = props.coordinate.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherForcast);
  }
}
