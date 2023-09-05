import React, { lazy, useState } from "react";
import topics from "../Data/DriverSidebarData";
import { Table } from "flowbite-react";
import BookingOption from "../Data/DriverGraphData";

const ViewDriver = lazy(() => import("../Components/Driver/ViewDriver"));

const Graphs = lazy(() => import("../Components/Common/Graphs"));

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
const EditDriver = lazy(() =>
  import("../Components/Driver/EditDriver")
);

const DriverDashboard = () => {
  
  // week days
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // day labels
  const dayLable = Array.from({ length: 7 }, (_, i) => {
    let today = new Date();
    today.setDate(today.getDate() + i - 6);
    return weekDays[today.getDay()];
  });

  const [activeComp,setActiveComp] = useState(0);
  const revenueData = {
    labels: dayLable,
    datasets: [
      {
        data: [2000, 3500, 7800, 2100, 1600, 2350, 5800],
        borderWidth: 2,
        borderColor: "#C70039",
        backgroundColor: "#C70039",
      },
      {
        data: [1500, 550, 2100, 1250, 3670, 4200, 7800],
        borderWidth: 2,
        borderColor: "#22A699",
        backgroundColor: "#22A699",
      },
    ],
  };

  // date settings - week
  const dateSettingsWeeks = [
    {
      start: 13,
      end: 7,
    },
    {
      start: 7,
      end: 0,
    },
  ];

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
              title={"Driver"}
              dataset={topics}
              setActiveComp={setActiveComp}
            />
          </div>

          {/* Manage Area */}
          <div className="relative flex w-full flex-col justify-between px-5 pt-4 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
            {/*vehicle registration*/}
            {activeComp === 0 ? <ViewDriver /> : <EditDriver />}

            {/*graph*/}

            <div className="flex h-fit w-full flex-col gap-4 p-1 pb-12 pr-5 pt-4 text-center text-2xl lg:flex-row">
              <Graphs
                options={BookingOption}
                type="line"
                data={revenueData}
                title={
                  <span className="text-2xl">
                    Week Earning
                    <small className="text-l ms-1 font-bold italic">
                      - Day Vs Earning
                    </small>
                  </span>
                }
                dateSettings={dateSettingsWeeks}
              />

              <div className=" mt-3 h-fit w-full max-w-2xl rounded-xl p-2  text-2xl shadow-md drop-shadow-lg dark:bg-slate-700">
                <p className="mb-5 text-2xl font-semibold font-Poppins">Recent Travels</p>

                <div className="secContainer grid">
                  <div className="singleCustomer w-full">
                    <Table className="items-center justify-center">
                      <Table.Head>
                        <Table.Cell>vehicle Owner</Table.Cell>
                        <Table.Cell>vehicle Register Number</Table.Cell>
                        <Table.Cell>Charges</Table.Cell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>
                            <div>
                              <span className=" block">Peter Stark</span>
                              <small>2 days ago</small>
                            </div>
                          </Table.Cell>
                          <Table.Cell>GC5423 </Table.Cell>
                          <Table.Cell>2200.00</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>
                            <div className="CustomerDetails">
                              <span className="name block">Peter Pan</span>
                              <small className="days">5 days ago</small>
                            </div>
                          </Table.Cell>
                          <Table.Cell>
                            <div className="vehiclenum">Gr6423</div>
                          </Table.Cell>
                          <Table.Cell>4500.00</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>
                            <div className="CustomerDetails">
                              <span className="name block">Olive Hutzen</span>
                              <small className="days">Two weeks ago</small>
                            </div>
                          </Table.Cell>
                          <Table.Cell>
                            <div className="vehiclenum">AC2423</div>
                          </Table.Cell>
                          <Table.Cell>500.00</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <FooterSecondary />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DriverDashboard;
