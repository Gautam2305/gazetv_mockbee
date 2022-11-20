import "./App.css";
import { RouterPath } from "./utils/routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterPath>
          <App/>
        </RouterPath>
      </header>
    </div>
  );
}

export default App;
