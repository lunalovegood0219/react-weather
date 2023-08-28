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
    </div>
  );
}

export default App;
