import React, { lazy } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import topics from "../components/Data/CustomersidebarData";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const HeaderSecondary = lazy(() =>
  import("../components/common/HeaderSecondary")
);
const FooterSecondary = lazy(() =>
  import("../components/common/FooterSecondary")
);
const BackgroundEffect = lazy(() =>
  import("../components/common/BackgroundEffect")
);
const SideBar = lazy(() => import("../components/common/SideBar"));
const FindVehicles = lazy(() => import("../components/common/FindVehicles"));

// google map libraries
const libs = ["places"];

const CustomerDashboard = () => {
  // load map api
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libs,
  });

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
      <div className="flex min-h-screen flex-col items-center justify-between">
        {/* middle container */}
        <div className="relative flex h-full w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <HeaderSecondary />
          {/* Content-Area */}
          <div className="flex min-h-screen w-screen flex-col lg:flex-row">
            {/* Side Bar Area */}
            <div className="w-full min-w-max lg:h-screen lg:max-w-xs">
              <SideBar title={"Username"} dataset={topics} />
            </div>
            <div className=" top-0 flex h-full w-full flex-col items-center justify-center  ">
              <FindVehicles />
            </div>
          </div>
          <FooterSecondary />
        </div>
      </div>
    </React.Fragment>
  );
};
export default CustomerDashboard;
