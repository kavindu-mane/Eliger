import React, { lazy } from "react";
const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Contact = lazy(() => import("../../pages/Contact"));
const Faq = lazy(() => import("../../pages/Faq"));
const Privacy = lazy(() => import("../../pages/Privacy"));
const Terms = lazy(() => import("../../pages/Terms"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const ForgetPW = lazy(() => import("../../pages/ForgetPW"));
const Error = lazy(() => import("../../pages/Error"));
const AdminDashboard = lazy(() => import("../../pages/AdminDashboard"));
const HelpAndSupportDashboard = lazy(() => import("../../pages/HelpAndSupportDashboard"));

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
  "/admindashboard": <AdminDashboard />,
  "/helpandsupportdashboard": <HelpAndSupportDashboard />,
};

export default LinkArray;
