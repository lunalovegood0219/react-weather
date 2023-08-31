import "./App.css";
import Clock from "./Clock";
import Forcast from "./Forcast";
import SearchEngine from "./SearchEngine";
import FormatedDate from "./FormatedDate";
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <span>
          <FormatedDate className="d-flex" /> <Clock className="d-flex" />
        </span>

        <SearchEngine defaultCity="tehran" />
        <hr />
        <Forcast />
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
