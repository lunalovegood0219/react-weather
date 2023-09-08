import "./App.css";
import Clock from "./Clock";

import SearchEngine from "./SearchEngine";
import FormatedDate from "./FormatedDate";
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <div className="row">
          <div className="row">
            <div className="col-9 d-flex justify-content-start">
              <FormatedDate />
            </div>
            <div className="col-3">
              <Clock />
            </div>
          </div>
        </div>
        <SearchEngine defaultCity="tehran" />
      </div>
      <div className="info text-center">
        <a href="https://github.com/lunalovegood0219/react-weather">
          open-source code
        </a>
        <span> by Fatemeh Barzegar</span>
      </div>
    </div>
  );
}

export default App;
