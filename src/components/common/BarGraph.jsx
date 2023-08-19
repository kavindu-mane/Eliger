import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
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

const Graphs = ({
  options,
  data,
  title,
  titlesActive = true,
  percentageActive = true,
}) => {
  return (
    <div className="relative m-3 flex w-full max-w-2xl flex-col rounded-lg bg-white px-4 py-6 shadow-[0_0_50px_20px_#64748b30] drop-shadow-xl dark:bg-[#404B69] dark:shadow-[0_0_50px_20px_#0f172a30] xl:w-[30rem] 2xl:w-full 2xl:max-w-3xl">
      <h1 className="mb-5 text-center font-Poppins text-xl font-medium">
        {title}
      </h1>

      {/* titles */}
      {titlesActive ? (
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
        </div>
      ) : (
        <></>
      )}
      <div className="h-80">
        <Bar
          options={options}
          data={data}
          className="w-full dark:invert-[0.95]"
        />
      </div>
      {/* percentages */}
      {percentageActive ? (
        <div className="mb-5 mt-8 flex flex-col items-center justify-between gap-2 px-16 sm:flex-row xl:flex-col 2xl:flex-row">
          {[1, 2, 3].map((i) => {
            return (
              <p
                key={i}
                className="flex items-center space-x-2 rounded-lg bg-white p-4 text-center shadow-xl drop-shadow-xl dark:bg-slate-800 ring-1"
              >
                <BiSolidUpArrow className="text-green-500" />
                <span className="font-ABeeZee text-3xl font-extrabold">
                  20.4%
                </span>
              </p>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Graphs;
