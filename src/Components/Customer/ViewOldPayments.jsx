import React, { lazy, useEffect, useState, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../Data/ErrorData";
const Paginations = lazy(() => import("../Common/Paginations"));

// create sweet alert object
const Alert = withReactContent(Swal);

const ViewOldPayments = () => {
  const [tableData, setTableData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // load data function
  const fetch = useCallback(async () => {
    setTableData(null);
    const formData = new FormData();
    formData.append("offset", 15 * (currentPage - 1));
    await axios
      .post("/load_customer_payments", formData)
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          setTableData(response.data);
          setPagesCount(Math.ceil(response?.data[0]?.total_rows / 15));
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, [currentPage]);

  // load data function run in component mount
  useEffect(() => {
    fetch();
  }, [fetch, currentPage]);

  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="w-full py-4 text-center font-Poppins text-xl font-medium md:text-2xl">
        My Payments
      </h1>

      <div className="mt-5 hidden w-full rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Payment Date & Time</span>
        </div>
        <div className="w-full text-center">
          <span className="">Payment Method</span>
        </div>
        <div className="w-full text-center">
          <span className="">Booking Type</span>
        </div>
        <div className="w-full text-center">
          <span className="">Amount</span>
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
              className="text-md group flex flex-col justify-center space-y-2 rounded-sm bg-white ring-[0.5px] ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:flex-row md:items-center md:justify-between md:space-y-0"
            >
              <p className="flex w-full truncate bg-slate-100 px-4 py-3 capitalize group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">
                  Payment Date & Time :&ensp;
                </span>
                {data?.Datetime}
              </p>
              <p className="flex w-full truncate px-4 py-3 capitalize">
                <span className="block md:hidden">Payment Method :&ensp;</span>
                {data?.Payment_type}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-3 capitalize group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Booking Type :&ensp;</span>
                {data?.Booking_Type}
              </p>
              <p className="flex w-full truncate px-4 py-3 capitalize">
                <span className="block md:hidden">Amount :&ensp;</span>
                {data?.Amount}
              </p>
            </div>
          );
        })}
      <Paginations
        totpages={pagesCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default ViewOldPayments;
