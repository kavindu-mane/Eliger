import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import LinkArray from "./components/Data/RouteData";
import ThemeSwitcher from "./components/Data/ThmeSwitecher";

function App() {
  ThemeSwitcher();

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
