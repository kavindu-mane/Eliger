import React, { lazy, useEffect } from "react";
import topics from "../Data/AdminSidebarData";
import AccountOption from "../Data/AdminGraph/AccountOption";
import VehicleOption from "../Data/AdminGraph/VehicleOption";
import RevenueOption from "../Data/AdminGraph/RevenueOption";
import BookingOption from "../Data/AdminGraph/BookingOption";
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
const BarGraph = lazy(() => import("../Components/Common/Graphs"));

const Admindashboard = () => {
  // week days
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // day labels
  const dayLable = Array.from({ length: 7 }, (_, i) => {
    let today = new Date();
    today.setDate(today.getDate() + i - 6);
    return weekDays[today.getDay()];
  });
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

  // revenue chart
  const revenueData = {
    labels: dayLable,
    datasets: [
      {
        data: [100, 230, 120, 120, 390, 150, 280],
        borderWidth: 2,
        borderColor: "#C70039",
        backgroundColor: "#C70039",
      },
      {
        data: [140, 180, 270, 100, 480, 520, 290],
        borderWidth: 2,
        borderColor: "#22A699",
        backgroundColor: "#22A699",
      },
    ],
  };

  // booking chart
  const bookingData = {
    labels: dayLable,
    datasets: [
      {
        data: [10, 21, 17, 12, 39, 29, 28],
        borderWidth: 2,
        borderColor: "#9A208C",
        backgroundColor: "#9A208C",
      },
      {
        data: [14, 18, 27, 10, 23, 12, 19],
        borderWidth: 2,
        borderColor: "#3A8891",
        backgroundColor: "#3A8891",
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

  // date settings - months
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
            <SideBar title={"Administrator"} dataset={topics} />
          </div>

          {/* Body Area */}
          <div className="relative flex w-full flex-col justify-between px-5 pt-4 md:px-10 lg:min-h-screen lg:overflow-y-auto lg:pt-20">
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
                {/* graph 3 */}
                <div className="flex w-full justify-center xl:w-1/2">
                  <BarGraph
                    type="line"
                    options={RevenueOption}
                    data={revenueData}
                    title={"Days vs Revenue"}
                    dateSettings={dateSettingsWeeks}
                  />
                </div>
                {/* graph 4 */}
                <div className="flex w-full justify-center xl:w-1/2">
                  <BarGraph
                    type="line"
                    options={BookingOption}
                    data={bookingData}
                    title={"Days Vs Booking"}
                    dateSettings={dateSettingsWeeks}
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
export default Admindashboard;
