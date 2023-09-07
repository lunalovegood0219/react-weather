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
          <div className="col-10"><FormatedDate /></div>
          <div className="col-2"><Clock /></div>
        </div>
        <SearchEngine defaultCity="tehran" />
      </div>
      <div className="info">
        <a href="https://github.com/lunalovegood0219/react-weather">
          open-source code
        </a>
        <span> by Fatemeh Barzegar</span>
      </div>
    </div>
  );
}

export default App;
