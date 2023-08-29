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
const AdminDashboard = lazy(() => import("../Pages/AdminDashboard"));
const HelpAndSupportDashboard = lazy(() =>
  import("../Pages/HelpAndSupportDashboard")
);
const DriverDashboard = lazy(() => import("../Pages/DriverDashboard"));
const VehicleOwnerDashboard = lazy(() =>
  import("../Pages/VehicleOwnerDashboard")
);
const CustomerDashboard = lazy(() => import("../Pages/CustomerDashboard"));
const Verification = lazy(() => import("../Pages/Verification"));

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
  "/admindashboard": <AdminDashboard />,
  "/helpandsupportdashboard": <HelpAndSupportDashboard />,
  "/driverdashboard": <DriverDashboard />,
  "/vehicleOwnerDashboard": <VehicleOwnerDashboard />,
  "/customerdashboard": <CustomerDashboard />,
  "/verification": <Verification />,
};

export default LinkArray;
