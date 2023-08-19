import React, { lazy, useEffect } from "react";
import topics from "../components/Data/adminsidebarData";
import AccountOption from "../components/Data/AdminGraph/AccountOption";
import VehicleOption from "../components/Data/AdminGraph/VehicleOption";
import { BiSolidUpArrow } from "react-icons/bi";
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
        backgroundColor: ["#D61C4E", "#2D4059", "#0D7E83", "#FD841F"],
      },
    ],
  };

  // percentages - account type vs ammount

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
              {/* heading */}
              <h1 className="my-3 px-3 font-ABeeZee text-2xl font-semibold">
                New Registrations
              </h1>
              <div className="flex h-auto flex-col xl:flex-row">
                {/* graph 1 */}
                <div className="flex w-full justify-center xl:w-1/2">
                  <BarGraph
                    options={AccountOption}
                    data={accountsData}
                    title={"Acount Type Vs Amount"}
                  >
                    {/* pass children */}
                    <div className="my-3 w-full place-self-end">
                      {/* past month */}
                      <div className="flex items-center justify-end space-x-4">
                        <span className="text-end font-Poppins text-sm font-medium">
                          June 19 - July 19
                        </span>
                        <span className="h-4 w-10 rounded-sm bg-[#059669] dark:invert-[0.95]"></span>
                      </div>
                      {/* current month */}
                      <div className="flex items-center justify-end space-x-4">
                        <span className="text-end font-Poppins text-sm font-medium">
                          July 19 - Today
                        </span>
                        <span className="h-4 w-10 rounded-sm bg-[#ea580c] dark:invert-[0.95]"></span>
                      </div>
                      {/* percentage */}
                      <div className="mt-8 flex justify-between ps-14">
                        {[1, 2, 3].map((i) => {
                          return (
                            <p
                              key={i}
                              className="flex items-center space-x-2 text-center"
                            >
                              <BiSolidUpArrow className="text-green-500" />
                              <span className="font-ABeeZee text-4xl font-extrabold">
                                20.4%
                              </span>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </BarGraph>
                </div>

                {/* graph 2 */}
                <div className="flex w-full justify-center xl:w-1/2">
                  <BarGraph
                    options={VehicleOption}
                    data={vehicleData}
                    title={"Vehicle Type Vs Amount"}
                  >
                    <div className="my-3">gdb</div>
                  </BarGraph>
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
