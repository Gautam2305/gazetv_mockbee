import React from "react";
import "./App.css";
import { RouterPath } from "./utils/routes";
import { Home } from "./pages/Home/Home";
import { Explore, Signup } from "./pages";
import { Login } from "./pages";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterPath>
          <Home/>
          <Explore/>
          <Login/>
          <Signup/>
          
        </RouterPath>
      </header>
    </div>
  );
}

export default App;
