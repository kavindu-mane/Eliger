import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graphs = ({ options, data }) => {
  return (
    <div className="m-3 h-fit w-full max-w-2xl rounded-lg bg-white px-4 py-6 shadow-[0_0_50px_20px_#64748b30] drop-shadow-xl dark:bg-[#404B69] dark:shadow-[0_0_50px_20px_#0f172a30]">
      <Bar options={options} data={data} className="dark:invert-[0.95]" />
    </div>
  );
};
export default Graphs;
