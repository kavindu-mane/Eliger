import React, { lazy, useEffect } from "react";
import topics from "../components/Data/HelpNSupportSidebarData";
import AccountOption from "../components/Data/AdminGraph/AccountOption";
import VehicleOption from "../components/Data/AdminGraph/VehicleOption";

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
const BarGraph = lazy(() => import("../components/common/Graphs"));

const HelpAndSupportDashboard = () => {
  
 
  // account chart
  const accountsData = {
    labels: ["Vehicle Owner", "Customer", "Driver"],
    datasets: [
      {
        data: [10, 23, 16],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#059669",
      },
      {
        data: [20, 43, 12],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#ea580c",
      },
    ],
  };
  // vehicle chart
  const vehicleData = {
    labels: ["Cars", "Van", "Tuk Tuk", "Bike"],
    datasets: [
      {
        data: [10, 23, 12, 12],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#d61c4e",
      },
      {
        data: [14, 18, 27, 10],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#2d4059",
      },
    ],
  };

  // date settings - months
  const dateSettingsMonths = [
    {
      start: 59,
      end: 30,
    },
    {
      start: 30,
      end: 0,
    },
  ];

  useEffect(() => {});
  return (
    <React.Fragment>
      {/* container */}
      <div className="relative flex h-full w-screen flex-col items-center">
        {/* bluer effect */}
        <BackgroundEffect />
        <HeaderSecondary />
        {/* Content-Area */}
        <div className="flex w-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
          {/* Side Bar Area */}
          <div className="w-full min-w-max lg:h-screen lg:max-w-xs">
            <SideBar title={"Help And Support"} dataset={topics} />
          </div>

          {/* Body Area */}
          <div className="relative flex w-full flex-col justify-between px-5 pt-4 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {/* top content area */}
            <div>
              {/*four Graphs*/}
              <div className="flex h-auto flex-wrap">
                {/* graph 1 */}
                <div className="flex w-full justify-center xl:w-1/2">
                  <BarGraph
                    options={AccountOption}
                    data={accountsData}
                    title={
                      <span>
                        New Registrations
                        <small className="ms-1 text-sm font-bold italic">
                          - Account Type Vs Amount
                        </small>
                      </span>
                    }
                    dateSettings={dateSettingsMonths}
                  />
                </div>
                {/* graph 2 */}
                <div className="flex w-full justify-center xl:w-1/2">
                  <BarGraph
                    options={VehicleOption}
                    data={vehicleData}
                    title={
                      <span>
                        New Registrations
                        <small className="ms-1 text-sm font-bold italic">
                          - Vehicle Type Vs Amount
                        </small>
                      </span>
                    }
                    dateSettings={dateSettingsMonths}
                  />
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="relative">
              <FooterSecondary />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HelpAndSupportDashboard;
