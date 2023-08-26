import "./App.css";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";

function App() {
  return (
    <div className="App weather-container container">
      <SearchEngine />
      <Weather />
    </div>
  );
}

export default App;
