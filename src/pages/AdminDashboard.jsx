import React, { lazy, useEffect } from "react";
import topics from "../components/Data/adminsidebarData";
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
const BarGraph = lazy(() => import("../components/common/BarGraph"));

const Admindashboard = () => {
  // account chart
  const accountsData = {
    labels: ["Vehicle Owner", "Customer", "Driver"],
    datasets: [
      {
        data: [10, 23, 12],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: ["#ea580c", "#059669", "#0284c7"],
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
        backgroundColor: ["#D61C4E", "#2D4059", "#0D7E83", "#FD841F"],
      },
    ],
  };

  useEffect(() => {});
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col items-center justify-between">
        {/* middle container */}
        <div className="relative flex h-full w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <HeaderSecondary />
          {/* Content-Area */}
          <div className="flex min-h-screen w-screen flex-col lg:flex-row">
            {/* Side Bar Area */}
            <div className="h-auto min-h-max w-full min-w-max lg:max-w-xs">
              <SideBar title={"Administrator"} dataset={topics} />
            </div>

            {/* Body Area */}
            <div className="h-auto min-h-max w-full px-5 pt-5 lg:pt-20">
              {/*Two Graphs*/}
              <h1 className="mb-3 px-3 font-ABeeZee text-2xl font-semibold">
                New Registrations
              </h1>
              <div className="flex h-auto flex-col xl:flex-row">
                <div className="flex w-full justify-center xl:w-1/2">
                  <BarGraph
                    options={AccountOption}
                    data={accountsData}
                    title={"Acount Type Vs Amount"}
                  />
                </div>
                <div className="flex w-full justify-center xl:w-1/2">
                  <BarGraph
                    options={VehicleOption}
                    data={vehicleData}
                    title={"Vehicle Type Vs Amount"}
                  />
                </div>
              </div>

              {/*vehicle registration*/}
              <div className="h-auto w-full px-5">
                <div className="border border-slate-500 p-1 pb-4 pt-4 text-center text-2xl">
                  New Vehicle Registrations
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};
export default Admindashboard;
