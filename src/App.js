import "./App.css";
import Forcast from "./Forcast";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css"
function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <SearchEngine />
        <Weather />
        <Forcast />
      </div>
      <div className="info">
      <a href="https://github.com/lunalovegood0219/react-weather">
        open-source code
      </a>
      <span>{" "}by Fatemeh Barzegar</span>
      </div>
    </div>
  );
}

export default App;
