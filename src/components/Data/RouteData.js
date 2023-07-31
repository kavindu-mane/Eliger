import React, { lazy } from "react";
const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Contact = lazy(() => import("../../pages/Contact"));
const Register = lazy(() => import("../../pages/Register"));
const Faq = lazy(() => import("../../pages/Faq"));
const Privacy = lazy(() => import("../../pages/Privacy"));
const Terms = lazy(() => import("../../pages/Terms"));
const Login = lazy(() => import("../../pages/Login"));
const Error = lazy(() => import("../../pages/Error"));

const LinkArray = {
  "/": <Home />,
  "/about": <About />,
  "/contact": <Contact />,
  "/rent": <Register />,
  "/ride": <Register />,
  "/faq": <Faq />,
  "/privacy": <Privacy />,
  "/terms": <Terms />,
  "/login": <Login />,
  "/*": <Error />,
};

export default LinkArray;
