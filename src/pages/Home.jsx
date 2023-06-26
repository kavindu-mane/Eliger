import React, { lazy } from "react";
const HomeHeader = lazy(() => import("../components/Home/HomeHeader"));

const Home = () => {
  return (
    <React.Fragment>
        <HomeHeader />
    </React.Fragment>
  );
};

export default Home;
