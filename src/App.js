import "./App.css";
import Forcast from "./Forcast";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";

function App() {
  return (
    <div className="App weather-container container">
      <SearchEngine />
      <Weather />
      <Forcast />
    </div>
  );
}

export default App;
