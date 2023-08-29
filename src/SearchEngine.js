import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
export default function SearchEngine(props) {
  const [temprature, setTemprature] = useState(" ");
  const [city, setCity] = useState(" ");
  function displayWeather(response) {
    console.log(response.data);
    setTemprature(response.data.main.temp);
  }
  function handleSearch(event) {
    event.preventDefault();
    const apiKey = "bc5ca568ee2d7c71357ca430a3ff8705";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="row">
      <form className="mb-3 mt-3" onClick={handleSearch}>
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
          <div className="col-3 ">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark w-100 submit-btn"
            />
          </div>
        </div>
      </form>
      <h1>{temprature}</h1>
    </div>
  );
}
