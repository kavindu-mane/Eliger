import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
