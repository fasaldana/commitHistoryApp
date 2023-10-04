import "./App.css";
import Nabvar from "./components/Nabvar";
import GitHistory from "./components/gitHistory";

function App() {
  return (
    <div className="app">
      <Nabvar />
      <div className="container">
        <GitHistory />
        <GitHistory />
      </div>
    </div>
  );
}

export default App;
