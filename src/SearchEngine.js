import axios from "axios";
import React, { useState } from "react";
import Weather from "./Weather";
import "./SearchEngine.css";
import { Hourglass } from "react-loader-spinner";


export default function SearchEngine() {
  const [api, setApi] = useState({ loaded : false});
  const [city, setCity] = useState("");

  function displayWeather(response) {
    console.log(response.data);
    setApi({
      loaded: true,
      temprature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind : response.data.wind.speed
    });
    
  }

  function handleSearch(event) {
    event.preventDefault();
    const apiKey = "51f128ddb960a0cbed5d6f3eea37ad01";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="mb-3 mt-3">
      <div className="row">
        <div className="col-md-9">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            autoComplete="off"
            spellCheck={true}
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <button
            type="submit"
            className="btn btn-dark w-100 submit-btn"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (api.loaded) {
    return (
      <div>
        {form}
        <Weather api={api} city={city}/>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <span className="loading-spinner">
          <Hourglass
            visible={true}
            height="80"
            width="60"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </span>
      </div>
    );
  }
}
