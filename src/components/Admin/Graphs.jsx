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

const Graphs = ({ options, data , title}) => {
  return (
    <div className="relative m-3 w-full 2xl:max-w-3xl max-w-2xl rounded-lg bg-white px-4 py-6 shadow-[0_0_50px_20px_#64748b30] drop-shadow-xl dark:bg-[#404B69] dark:shadow-[0_0_50px_20px_#0f172a30] xl:w-[30rem] 2xl:w-full">
      <h1 className="text-center font-Poppins text-2xl font-semibold mb-5">
        {title}
      </h1>
      <div className="h-80">
        <Bar
          options={options}
          data={data}
          className="w-full dark:invert-[0.95]"
        />
      </div>
    </div>
  );
};
export default Graphs;
