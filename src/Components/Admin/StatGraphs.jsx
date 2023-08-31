import React, { lazy } from "react";
import AccountOption from "../../Data/AdminGraph/AccountOption";
import VehicleOption from "../../Data/AdminGraph/VehicleOption";
import RevenueOption from "../../Data/AdminGraph/RevenueOption";
import BookingOption from "../../Data/AdminGraph/BookingOption";
const Graphs = lazy(() => import("../Common/Graphs"));

const StatGraphs = () => {
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
  return (
    <div className="flex h-auto flex-wrap pb-12">
      <h1 className="w-full py-4 text-center font-Poppins text-xl font-medium md:text-2xl">
        Statistics
      </h1>
      {/* graph 1 */}
      <div className="flex w-full justify-center xl:w-1/2">
        <Graphs
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
        <Graphs
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
        <Graphs
          type="line"
          options={RevenueOption}
          data={revenueData}
          title={"Days vs Revenue"}
          dateSettings={dateSettingsWeeks}
        />
      </div>
      {/* graph 4 */}
      <div className="flex w-full justify-center xl:w-1/2">
        <Graphs
          type="line"
          options={BookingOption}
          data={bookingData}
          title={"Days Vs Booking"}
          dateSettings={dateSettingsWeeks}
        />
      </div>
    </div>
  );
};

export default StatGraphs;
