import React from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
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
  percentages = [],
}) => {
  // data getting
  const getDate = (date) => {
    let today = new Date();
    today.setDate(today.getDate() - date);
    return (
      today.toLocaleString("default", { month: "long" }) + " " + today.getDate()
    );
  };

  // date settings
  const dateSettings = [
    {
      id: 0,
      start: 59,
      end: 30,
    },
    {
      id: 1,
      start: 30,
      end: 0,
    },
  ];
  return (
    <div className="relative m-3 flex w-full max-w-2xl flex-col rounded-lg bg-white px-4 py-6 shadow-[0_0_50px_20px_#64748b30] drop-shadow-xl dark:bg-[#404B69] dark:shadow-[0_0_50px_20px_#0f172a30] xl:w-[30rem] 2xl:w-full 2xl:max-w-3xl">
      <h1 className="mb-5 text-center font-Poppins text-xl font-medium">
        {title}
      </h1>

      {/* titles */}
      {titlesActive ? (
        <div className="my-3 w-full place-self-end">
          {dateSettings.map((dates) => {
            return (
              <div className="flex items-center justify-end space-x-4">
                <span className="text-end font-Poppins text-sm font-medium">
                  {getDate(dates.start)}&nbsp;-&nbsp;
                  {dates.end === 0 ? "Today" : getDate(dates.end)}
                </span>
                <span
                  className={`h-4 w-10 rounded-sm bg-[${
                    data.datasets[dates.id].backgroundColor
                  }] dark:invert-[0.95]`}
                ></span>
              </div>
            );
          })}
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
          {percentages.map((values, i) => {
            return (
              <div
                key={i}
                className="flex w-full flex-col items-center rounded-lg bg-white p-4 text-center shadow-xl ring-1 ring-gray-500 drop-shadow-xl dark:bg-slate-800"
              >
                {/* line 1 */}
                <p className="flex items-center space-x-2">
                  {values.isPositive ? (
                    <BiSolidUpArrow className="text-emerald-600" />
                  ) : (
                    <BiSolidDownArrow className="text-red-500" />
                  )}
                  <span
                    className={
                      "font-ABeeZee text-3xl font-extrabold " +
                      (values.isPositive ? "text-green-500" : "text-red-500")
                    }
                  >
                    {values.percentage}
                  </span>
                </p>
                {/* line 2 */}
                <p className="text-md mt-2 font-Poppins font-medium text-[#4A3933] dark:text-[#FFD93D]">
                  {data.labels[i]}
                </p>
              </div>
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
