import React from "react";
import "./SearchEngine.css";
import axios from "axios";
export default function SearchEngine(props) {
  function displayWeather(response) {
    console.log(response.data);
  }
  function handleSearch() {
    const apiKey = "51f128ddb960a0cbed5d6f3eea37ad01";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
              spellCheck="true"
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
    </div>
  );
}
