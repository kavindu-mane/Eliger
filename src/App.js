import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Drive = lazy(() => import("./pages/Drive"));
const Faq = lazy(() => import("./pages/Faq"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Ride = lazy(() => import("./pages/Ride"));
const Error = lazy(() => import("./pages/Error"));

const linkArray = {
  "/": <Home />,
  "/about": <About />,
  "/contact": <Contact />,
  "/drive": <Drive />,
  "/ride": <Ride />,
  "/faq": <Faq />,
  "/privacy": <Privacy />,
};

function App() {
  return (
    <React.Fragment>
      <Router>
        <Suspense
          fallback={
            <p className="flex h-screen items-center justify-center text-lg italic">
              Loading please wait...
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
