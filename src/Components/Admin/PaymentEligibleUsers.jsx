import React, { lazy, useCallback, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ErrorData from "../../Data/ErrorData";
import withReactContent from "sweetalert2-react-content";
import { Button } from "flowbite-react";
import { utils, writeFile } from "xlsx";
const Paginations = lazy(() => import("../Common/Paginations"));
const LoadingSpinner = lazy(() => import("../Common/LoadingSpinner"));

// create sweet alert object
const Alert = withReactContent(Swal);

const banks = [
  "People's Bank",
  "Bank of Ceylon",
  "Hatton National Bank",
  "Sampath Bank",
  "Commercial Bank",
  "NDB",
  "NSB",
];

const PaymentEligibleUsers = () => {
  const [tableData, setTableData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // load data function
  const fetch = useCallback(() => {
    setTableData(null);
    const formData = new FormData();
    formData.append("offset", 25 * (currentPage - 1));
    axios
      .post("/load_payment_eligible_users", formData)
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          setTableData(response.data);
          setPagesCount(Math.ceil(response?.data[0]?.total_rows / 25));
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

  // fetch all data and generate xlsx
  const generateELXS = async () => {
    setIsLoading(true);
    await axios
      .post("/load_payment_eligible_users")
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          const wb = utils.book_new();
          banks.forEach((bank) => {
            const ws = utils.json_to_sheet(response?.data[bank]);
            utils.book_append_sheet(wb, ws, bank);
          });
          writeFile(
            wb,
            "payment_eligibale_list_" +
              new Date().toJSON().slice(0, 10) +
              ".xlsx"
          );
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      {/* loading */}
      {isLoading && <LoadingSpinner />}
      <div className="pb-5 text-center text-xl font-medium md:text-2xl">
        Payment Eligible Users
      </div>
      {/* buttons */}
      <div className="mb-2 flex flex-col items-end justify-end gap-x-2 sm:flex-row">
        {/* export xlsx */}
        <Button
          onClick={() => {
            generateELXS();
          }}
          size={"sm"}
          className="mb-1 rounded-md"
        >
          Export as Excel
        </Button>
      </div>
      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Beneficiary Name</span>
        </div>
        <div className="w-full text-center">
          <span className="">Bank</span>
        </div>
        <div className="w-full text-center">
          <span className="">Account Number</span>
        </div>
        <div className="w-full text-center">
          <span className="">Branch Code</span>
        </div>
        <div className="w-full text-center">
          <span className="">Income (Rs.)</span>
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
              className="text-md group flex flex-col justify-center space-y-2 rounded-sm bg-white ring-1 ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:flex-row md:items-center md:justify-between md:space-y-0"
            >
              <p className="flex w-full truncate bg-slate-100 px-4 py-3  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">
                  Beneficiary Name :&ensp;
                </span>
                {data?.Beneficiary_Name}
              </p>
              <p className="flex w-full truncate px-4 py-2 ">
                <span className="block md:hidden">Bank :&ensp;</span>
                {data?.Bank}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-3  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Account Number :&ensp;</span>
                {data?.Acc_Number}
              </p>
              <p className="flex w-full truncate px-4 py-2 ">
                <span className="block md:hidden">Branch Code :&ensp;</span>
                {data?.Branch}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-3  group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Income(Rs.) :&ensp;</span>
                {data?.Income}
              </p>
            </div>
          );
        })}
      <Paginations
        totpages={pagesCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </React.Fragment>
  );
};
export default PaymentEligibleUsers;
