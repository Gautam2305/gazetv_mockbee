import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./contexts/VideoContext";
import { AuthProvider } from "./contexts/AuthContext";
import { LikeProvider } from "./contexts/LikeContext";
import { WatchLaterProvider } from "./contexts/WatchLaterContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WatchLaterProvider>
        <LikeProvider>
          <AuthProvider>
            <VideoProvider>
              <App />
            </VideoProvider>
          </AuthProvider>
        </LikeProvider>
      </WatchLaterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
