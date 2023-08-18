import React, { lazy } from "react";
import topics from "../components/Data/adminsidebarData";
import AccountOption from "../components/Data/AdminGraph/AccountOption";
import VehicleOption from "../components/Data/AdminGraph/VehicleOption";
const HeaderSecondary = lazy(() => import("../components/HeaderSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));
const SideBar = lazy(() => import("../components/SideBar"));
const Graphs = lazy(() => import("../components/Admin/Graphs"));

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
            <div className="h-auto min-h-max w-full lg:w-1/3 lg:max-w-xs xl:w-1/4">
              <SideBar title={"Administrator"} dataset={topics} />
            </div>

            {/* Body Area */}
            <div className="h-auto min-h-max px-5 lg:w-2/3 xl:w-3/4 2xl:w-full">
              {/*Two Graphs*/}
              <div className="flex h-auto w-full flex-col gap-y-10 pt-20 xl:flex-row">
                <div className="flex w-full justify-center">
                  <Graphs options={AccountOption} data={accountsData} />
                </div>
                <div className="flex w-full justify-center">
                  <Graphs options={VehicleOption} data={vehicleData} />
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
