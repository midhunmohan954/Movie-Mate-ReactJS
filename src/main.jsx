import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import './index.css'
import { ScrolltoTop } from "./Components/ScrolltoTop.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrolltoTop />
      <App />
    </Router>
  </React.StrictMode>
);
