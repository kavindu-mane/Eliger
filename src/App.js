import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import LinkArray from "./Data/RouteData";
import ThemeSwitcher from "./Data/ThmeSwitecher";
import axios from "axios";

function App() {
  ThemeSwitcher();
  axios.defaults.withCredentials = true;

  return (
    <React.Fragment>
      <Router>
        <Suspense
          fallback={
            <p className="flex h-screen items-center justify-center text-lg italic">
              <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
            </p>
          }
        >
          <Routes>
            {Object.keys(LinkArray).map((key) => {
              return <Route key={key} path={key} element={LinkArray[key]} />;
            })}
          </Routes>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
