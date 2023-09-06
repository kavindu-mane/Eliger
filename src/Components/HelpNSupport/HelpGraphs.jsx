import React, { lazy } from "react";
import AccountOption from "../../Data/AdminGraph/AccountOption";
import VehicleOption from "../../Data/AdminGraph/VehicleOption";

const Graphs = lazy(() => import("../Common/Graphs"));

const HelpGraphs = () => {
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
    </div>
  );
};

export default HelpGraphs;
