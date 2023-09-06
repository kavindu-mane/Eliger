import React, { lazy, useState, useCallback } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import topics from "../Data/CustomersidebarData";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HeaderSecondary = lazy(() =>
  import("../Components/Common/HeaderSecondary")
);
const FooterSecondary = lazy(() =>
  import("../Components/Common/FooterSecondary")
);
const BackgroundEffect = lazy(() =>
  import("../Components/Common/BackgroundEffect")
);
const SideBar = lazy(() => import("../Components/Common/SideBar"));
const FindVehicles = lazy(() => import("../Components/Common/FindVehicles"));

const EditMyProfile = lazy(() =>
  import("../Components/Customer/EditMyProfile")
);

const ViewMyBookings = lazy(() =>
  import("../Components/Customer/ViewMyBookings")
);
const ViewOldPayments = lazy(() =>
  import("../Components/Customer/ViewOldPayments")
);
// google map libraries
const libs = ["places"];

const CustomerDashboard = () => {
  //Component loading state hook
  const [activeComp, setActiveComp] = useState(0);
  // const [loadedData, setLoadedData] = useState(null);
  const navigate = useNavigate();

  const loadData = useCallback(() => {
    axios
      .post("/get_customer")
      .then((response) => {
        if (response.status === 200) {
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        navigate("/login");
      });
  }, [navigate]);

  const optionComponents = {
    0: <FindVehicles />,
    1: <EditMyProfile />,
    2: <ViewMyBookings />,
    3: <ViewOldPayments />,
  };
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
      {/* middle container */}
      <div className="relative flex h-full w-screen flex-col items-center">
        {/* bluer effect */}
        <BackgroundEffect />
        <HeaderSecondary />
        {/* Content-Area */}
        <div className="flex w-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
          {/* Side Bar Area */}
          <div className="w-full min-w-max lg:h-screen lg:max-w-xs">
            <SideBar
              title={"Username"}
              dataset={topics}
              setActiveComp={setActiveComp}
            />
          </div>

          {/* Body Area */}
          <div className="relative flex w-full flex-col items-center justify-between px-5 pt-4 md:px-10 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {/* bottom content area */}
            {optionComponents[activeComp]}
            <div className="w-2 pb-20"></div>

            {/* footer */}
            <div className="relative w-full">
              <FooterSecondary />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CustomerDashboard;
