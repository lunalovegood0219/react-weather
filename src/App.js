import "./App.css";
import Forcast from "./Forcast";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";

function App() {
  return (
    <div className="App  container">
      <div className="weather-container">
      <SearchEngine />
      <Weather />
      <Forcast />
    </div>
    <a href="https://github.com/lunalovegood0219/react-weather" > open-source code by Fatemeh barxegar</a>
    
    </div>
  );
}

export default App;
