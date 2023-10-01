import React, { useState, lazy, useCallback, useEffect } from "react";
import { Button } from "flowbite-react";
import axios from "axios";
const Paginations = lazy(() => import("../Common/Paginations"));

const BookiengRequest = ({ loadedData }) => {
  const [tableData, setTableData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);

  // load data function
  const fetch = useCallback(async () => {
    setTableData(null);
    const formData = new FormData();
    formData.append("type", "driver");
    await axios
      .post("/load_owner_property", formData)
      .then((response) => {
        if (response.data.length !== 0) {
          setTableData(response.data);
          setPagesCount(Math.ceil(response.data.length / 15));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // load data function run in component mount
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="flex h-full w-full flex-col">
      {loadedData?.Vehicle_PlateNumber !== null && (
        <div className="mb-10 flex flex-col justify-between gap-y-5 sm:mb-5 sm:flex-row">
          {/* current vehicle */}
          <p className="flex items-center text-center italic capitalize">
            My Vehicle : {loadedData?.Vehicle_PlateNumber} (
            {loadedData?.Vehicle_type})
          </p>
          {/* driver availabilty */}
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value="available"
              className="peer sr-only"
              checked={loadedData?.Availability === "available"}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Vehicle Availabilty
            </span>
          </label>
        </div>
      )}

      <div className="flex flex-col">
        {loadedData?.Vehicle_PlateNumber === null && (
          <p className="mb-2 rounded-md bg-yellow-300 p-2 italic text-black">
            No vehicle assign.
          </p>
        )}
        {loadedData?.Status !== "verified" && (
          <p className="mb-2 rounded-md bg-yellow-300 p-2 italic text-black">
            Licence not verified.
          </p>
        )}
      </div>

      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        Booking Request
      </div>
      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Name</span>
        </div>
        <div className="w-full text-center">
          <span className="">Pick up</span>
        </div>
        <div className="w-full text-center">
          <span className="">Destination</span>
        </div>
        <div className="w-full text-center">
          <span className="">Option</span>
        </div>
      </div>
      {tableData === null && (
        <p className="mt-4 w-full text-center text-sm font-medium italic">
          No Data Found
        </p>
      )}
      {tableData !== null &&
        tableData.map((data, i) => {
          return (
            <div
              key={i}
              className="text-md group my-2 flex flex-col justify-center space-y-2 rounded-sm bg-white ring-1 ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:my-0 md:flex-row md:items-center md:justify-between md:space-y-0"
            >
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Name :&ensp;</span>
                {data.Driver_firstname} {data.Driver_lastname}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-3 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Pick up :&ensp;</span>
                {data?.Email}
              </p>
              <p className="flex w-full truncate px-4 py-2 capitalize">
                <span className="block md:hidden">Destination :&ensp;</span>
                {data?.Email}
              </p>
              <div className="flex w-full justify-end bg-slate-100 px-4 py-2.5 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
                <Button className="h-7 rounded-md bg-green-500 px-4">
                  Accept
                </Button>
                <Button className="h-7 rounded-md bg-red-500 px-4">
                  Reject
                </Button>
              </div>
            </div>
          );
        })}
      <Paginations totpages={pagesCount} />
    </div>
  );
};
export default BookiengRequest;
