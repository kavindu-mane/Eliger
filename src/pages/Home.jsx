import React, { lazy } from "react";
import Footer from "../components/Footer";
const HomeHeader = lazy(() => import("../components/Home/HomeHeader"));

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
