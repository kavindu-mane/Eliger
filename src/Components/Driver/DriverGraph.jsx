import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  //maintainAspectRatio: true,
  scales: {
    y: {
      ticks: {
        color: "rgb(253 164 175)",
        font: {
          weight: "bold",
          size: 14,
        },
      },
      title: {
        text: "Amount",
        display: true,
        color: "shadow-md drop-shadow-lg dark:bg-slate-100",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    x: {
      ticks: {
        color: "rgb(253 164 175)",
        font: {
          weight: "bold",
          size: 14,
        },
      },
      title: {
        text: "Day",
        display: true,
        color: "shadow-md drop-shadow-lg dark:bg-slate-100",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "right",

      font: {
        size: 16,
        weight: "bold",
      },
    },
    title: {
      display: true,
    },
  },
};

const labels = [
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",

];

export const data = {
  labels,
  datasets: [
    {
      label: "Aug 4 - Aug 10",
      
      data: [2000, 3500, 7800, 2100, 1600, 2350, 5800],
      borderWidth: 2,
      borderColor: "rgb(244 63 94)",
      backgroundColor: "rgb(253 164 175)",
    },
    {
      label: "Aug 11-Aug 19",
      data: [1500, 550, 2100, 1250, 3670, 4200, 7800],
      borderWidth: 2,
      borderColor: "rgb(22 163 74)",
      backgroundColor: "#22A699",
    },
  ],
};
const DriverGraph = () => {
  return <Line options={options} data={data} />;
};
export default DriverGraph;
