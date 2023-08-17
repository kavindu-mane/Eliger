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
  const accountsData = {
    labels: ["Vehicle Owner", "Customer", "Driver"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 23, 12, 12, 13, 14, 17],
        borderColor: "#fff",
        backgroundColor: "#fff",
      },
    ],
  };
  const vehicleData = {
    labels: ["Cars", "Van", "Tuk Tuk","Bike"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 23, 12, 12, 13, 14, 17],
        borderColor: "#fff",
        backgroundColor: "#fff",
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
            <div className="h-auto min-h-max w-full lg:w-1/4 xl:w-1/5">
              <SideBar title={"Administrator"} dataset={topics} />
            </div>

            {/* Body Area */}
            <div className="h-auto min-h-max w-full lg:w-3/4 xl:w-4/5">
              {/*Two Graphs*/}
              <div className="flex h-auto w-full flex-col pl-10 pt-20 lg:h-1/2 lg:flex-row">
                <div className="w-1/2">
                  <Graphs options={AccountOption} data={accountsData} />
                </div>
                <div className="w-1/2">
                  <Graphs options={VehicleOption} data={vehicleData} />
                </div>
              </div>

              {/*vehicle registration*/}
              <div className="h-auto w-full pl-8 pr-8 lg:h-1/2">
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
