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
  PointElement,
  LineElement,
  ArcElement,
  BarController,
  RadialLinearScale,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  BarController,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Graphs = ({
  options,
  data,
  title,
  type = "bar",
  titlesActive = true,
  percentageActive = true,
  dateSettings,
}) => {
  // data getting
  const getDate = (date) => {
    let today = new Date();
    today.setDate(today.getDate() - date);
    return (
      today.toLocaleString("default", { month: "long" }) + " " + today.getDate()
    );
  };
  // calculate percentages
  const getPercentage = (index) => {
    const past = data.datasets[0].data[index];
    const current = data.datasets[1].data[index];
    return (((current - past) * 100) / past).toFixed(2);
  };

  return (
    <div className="relative m-3 flex w-full max-w-2xl flex-col rounded-lg bg-white px-4 py-5 shadow-[0_0_50px_20px_#64748b30] drop-shadow-xl dark:bg-[#334257] dark:shadow-[0_0_50px_20px_#0f172a30] 2xl:max-w-3xl">
      <h1 className="mb-5 text-center font-Poppins text-xl font-medium">
        {title}
      </h1>

      {/* titles */}
      {titlesActive ? (
        <div className="my-3 w-full place-self-end">
          {dateSettings.map((dates, i) => {
            return (
              <div key={i} className="flex items-center justify-end space-x-4">
                <span className="text-end font-Poppins text-sm font-medium">
                  {getDate(dates.start)}&nbsp;-&nbsp;
                  {dates.end === 0 ? "Today" : getDate(dates.end)}
                </span>
                <span
                  className={"h-4 w-10 rounded-sm dark:invert-[0.95]"}
                  style={{ backgroundColor: data.datasets[i].backgroundColor }}
                ></span>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      <div className="h-64">
        <Chart
          type={type}
          options={options}
          data={data}
          className="w-full dark:invert-[0.95]"
        />
      </div>
      {/* percentages */}
      {percentageActive ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {data.labels.map((values, i) => {
            const percentage = getPercentage(i);
            const isPositive = percentage >= 0;
            return (
              <div
                key={i}
                className="flex min-w-[10rem] flex-col items-center rounded-lg bg-white p-4 text-center shadow-xl ring-1 ring-gray-500 drop-shadow-xl dark:bg-slate-800"
              >
                {/* line 1 */}
                <p className="flex items-center space-x-2">
                  {isPositive ? (
                    <BiSolidUpArrow className="text-emerald-600" />
                  ) : (
                    <BiSolidDownArrow className="text-red-500" />
                  )}
                  <span
                    className={
                      "font-ABeeZee text-2xl font-extrabold " +
                      (isPositive ? "text-green-500" : "text-red-500")
                    }
                  >
                    {percentage}%
                  </span>
                </p>
                {/* line 2 */}
                <p className="font-Poppins text-sm font-medium text-[#4A3933] dark:text-[#FFD93D]">
                  {values}
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
