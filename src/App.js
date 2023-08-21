import React, { Suspense } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import LinkArray from "./components/Data/RouteData";
import ThemeSwitcher from "./components/Data/ThmeSwitecher";
// google map libraries
const libs = ["places"];

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });
  ThemeSwitcher();
  // return loading spinner while google map loading
  if (!isLoaded)
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
        <h1 className="mt-8 font-Poppins text-2xl font-medium italic">
          Map is loading..
        </h1>
      </div>
    );

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
