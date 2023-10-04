import "./App.css";
import Nabvar from "./components/Nabvar";
import GitHistory from "./components/gitHistory";

function App() {
  return (
    <div className="app">
      <Nabvar />
      <div className="container">
        <GitHistory repoName="commitHistoryApp" />
        <GitHistory repoName="commitHistoryApp_backend" />
      </div>
    </div>
  );
}

export default App;
