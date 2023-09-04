import React, { lazy } from "react";
import RevenueOption from "../../Data/AdminGraph/RevenueOption";
const Graphs = lazy(() => import("../Common/Graphs"));

// week days
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// day labels
const dayLable = Array.from({ length: 7 }, (_, i) => {
  let today = new Date();
  today.setDate(today.getDate() + i - 6);
  return weekDays[today.getDay()];
});

const revenueData = {
  labels: dayLable,
  datasets: [
    {
      data: [4000, 3500, 7800, 2100, 2600, 5350, 5800],
      borderWidth: 2,
      borderColor: "#C70039",
      backgroundColor: "#C70039",
    },
    {
      data: [1600, 2550, 2400, 1250, 3670, 4900, 7800],
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

const VehicleOwnerGraph = () => {
  return (
    <Graphs
      options={RevenueOption}
      type="line"
      data={revenueData}
      title={
        <span>
          <div className="font-semibold">
            Weekly Earning
            <small className="ms-1 text-sm font-bold italic">
              - Day Vs Earning
            </small>
          </div>
        </span>
      }
      dateSettings={dateSettingsWeeks}
    />
  );
};

export default VehicleOwnerGraph;
