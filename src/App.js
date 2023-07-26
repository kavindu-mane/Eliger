import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Rent = lazy(() => import("./pages/Rent"));
const Faq = lazy(() => import("./pages/Faq"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Ride = lazy(() => import("./pages/Ride"));
const Error = lazy(() => import("./pages/Error"));

const linkArray = {
  "/": <Home />,
  "/about": <About />,
  "/contact": <Contact />,
  "/rent": <Rent />,
  "/ride": <Ride />,
  "/faq": <Faq />,
  "/privacy": <Privacy />,
};

function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <React.Fragment>
      <Router>
        <Suspense
          fallback={
            <p className="flex h-screen items-center justify-center text-lg italic">
              <CgSpinnerTwoAlt className="w-20 h-20 animate-spin text-emerald-400"/>
            </p>
          }
        >
          <Routes>
            {Object.keys(linkArray).map((key) => {
              return <Route key={key} path={key} element={linkArray[key]} />;
            })}
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
