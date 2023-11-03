import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite>
      <Router>
        <App />
      </Router>
    </Flowbite>
  </React.StrictMode>
);
