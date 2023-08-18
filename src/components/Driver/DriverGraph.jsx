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
 responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
     
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July","Augest","September"];

export const data = {
  labels,
  datasets: [
    {
      label: "Monthly earning",
      data: [23000, 6700, 10200, 40670, 30100, 8900, 7000,550,100],
      borderColor: "rgb(14 116 144)",
      backgroundColor: "rgb(45 212 191)",
    },
  ],
};
const DriverGraph=()=>{

  return <Line options={options} data={data} />;
}
export default DriverGraph;