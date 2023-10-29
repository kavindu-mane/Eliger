import React, { lazy } from "react";
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Contact = lazy(() => import("../Pages/Contact"));
const Faq = lazy(() => import("../Pages/Faq"));
const Privacy = lazy(() => import("../Pages/Privacy"));
const Terms = lazy(() => import("../Pages/Terms"));
const Login = lazy(() => import("../Pages/Login"));
const Register = lazy(() => import("../Pages/Register"));
const ForgetPW = lazy(() => import("../Pages/ForgetPW"));
const Search = lazy(() => import("../Pages/Search"));
const Error = lazy(() => import("../Pages/Error"));
const Verification = lazy(() => import("../Pages/Verification"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));

const LinkArray = {
  "/": <Home />,
  "/rent": <Register type="owner" />,
  "/ride": <Register type="customer" />,
  "/forget": <ForgetPW />,
  "/login": <Login />,
  "/about": <About />,
  "/contact": <Contact />,
  "/faq": <Faq />,
  "/privacy": <Privacy />,
  "/terms": <Terms />,
  "/*": <Error />,
  "/search": <Search />,
  "/verification": <Verification />,
  "/dashboard": <Dashboard />,
};

export default LinkArray;
