import React from "react";
import "./App.css";
import { RouterPath } from "./utils/routes";
import { Home } from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterPath>
          <Home/>
        </RouterPath>
      </header>
    </div>
  );
}

export default App;
