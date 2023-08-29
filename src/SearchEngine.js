import axios from "axios";
import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");

  function displayWeather(response) {
    console.log(response.data);
    setWeather(response.data.main.temp);
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

  return (
    <div>
      <form className="mb-3 mt-3">
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
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
      <h1>{weather}</h1>
    </div>
  );
}