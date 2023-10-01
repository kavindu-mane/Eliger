import React, { lazy, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import topics from "../Data/SideBars/DriverSidebarData";

const BookiengRequest = lazy(() =>
  import("../Components/Driver/BookiengRequest")
);
const DriverGraph = lazy(() => import("../Components/Driver/DriverGraph"));
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
const EditAccount = lazy(() =>
  import("../Components/VehicleOwner/EditAccount")
);

const DriverDashboard = () => {
  const [activeComp, setActiveComp] = useState(0);
  const [loadedData, setLoadedData] = useState(null);
  const navigate = useNavigate();

  const loadData = useCallback(async () => {
    await axios
      .post("/get_driver")
      .then((response) => {
        if (response.status === 200 && response.data !== 14) {
          setLoadedData(response.data);
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        navigate("/login");
      });
  }, [navigate]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const optionComponents = {
    0: <BookiengRequest loadedData={loadedData} />,
    1: <EditAccount currentData={loadedData} urlPath={"/update_driver"} />,
    2: <DriverGraph />,
  };

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
              title={`${loadedData?.Driver_firstname} ${loadedData?.Driver_lastname}`}
              dataset={topics}
              setActiveComp={setActiveComp}
              active={activeComp}
            />
          </div>

          {/* Manage Area */}
          <div className="relative flex w-full flex-col items-center justify-between px-5 pt-4 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {optionComponents[activeComp]}
            <div className="relative mt-10 w-full">
              <FooterSecondary />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DriverDashboard;
