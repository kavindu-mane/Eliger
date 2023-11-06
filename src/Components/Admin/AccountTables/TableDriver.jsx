import React, { lazy, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, Button } from "flowbite-react";
import Swal from "sweetalert2";
import ErrorData from "../../../Data/ErrorData";
import withReactContent from "sweetalert2-react-content";
const ManageDriverAccount = lazy(() =>
  import("../Modals/Tables/ManageDriverAccount")
);
const Paginations = lazy(() => import("../../Common/Paginations"));

// create sweet alert object
const Alert = withReactContent(Swal);

const TableDriver = () => {
  const [tableData, setTableData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const [status, setStatus] = useState("verified");
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [driverDetails, setDriverDetails] = useState(null);

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
    formData.append("account_type", "driver");
    formData.append("status", status);
    formData.append("offset", 15 * (currentPage - 1));
    axios
      .post("/load_accounts", formData)
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          setTableData(response.data);
          setPagesCount(Math.ceil(response?.data[0]?.total_rows / 15));
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, [currentPage, status]);

  // load data function run in component mount
  useEffect(() => {
    if (!isOpenModal) fetch();
  }, [fetch, status, isOpenModal, currentPage]);

  return (
    <React.Fragment>
      {isOpenModal && (
        <ManageDriverAccount
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          details={driverDetails}
        />
      )}
      <h1 className="w-full py-4 text-center font-Poppins text-xl font-medium md:text-2xl">
        Driver Accounts
      </h1>

      {/* account status dropdown */}
      <div className="relative flex items-center justify-end py-6">
        <p className="me-2">Account Status : </p>
        <Dropdown
          label={<p className="font-Poppins capitalize">{status}</p>}
          size={"xs"}
        >
          <Dropdown.Item onClick={() => setStatus("verified")}>
            Verified
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setStatus("unverified")}>
            Unverified
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setStatus("disabled")}>
            Disabled
          </Dropdown.Item>
        </Dropdown>
      </div>

      <div className="hidden rounded-t-md bg-gray-400 px-4 py-2 ring-[0.5px] ring-gray-400 dark:bg-gray-700 dark:ring-gray-600 md:flex">
        <div className="w-full text-center">
          <span className="">Full Name</span>
        </div>
        <div className="w-full text-center">
          <span className="">Phone</span>
        </div>
        <div className="w-full text-center">
          <span className="">Email</span>
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
              className="text-md group flex flex-col justify-center space-y-2 rounded-sm bg-white ring-1 ring-gray-400 hover:bg-gray-200 dark:bg-slate-950 dark:ring-gray-600 dark:hover:bg-gray-800 md:flex-row md:items-center md:justify-between md:space-y-0"
            >
              <p className="flex w-full truncate px-4 py-3">
                <span className="block md:hidden">Full Name :&ensp;</span>
                {data.Driver_firstname} {data.Driver_lastname}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-3 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Phone :&ensp;</span>
                {data.Driver_Tel}
              </p>
              <p className="flex w-full truncate px-4 py-3">
                <span className="block md:hidden">Email :&ensp;</span>
                {data.Email}
              </p>
              <div className="flex w-full justify-end truncate bg-slate-100 px-4 py-2.5 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
                <Button
                  className="h-7 rounded-md !bg-transparent px-4 text-sky-500 duration-300 ease-in hover:!bg-transparent hover:text-sky-700"
                  onClick={() => {
                    setDriverDetails(data);
                    setIsOpenModal(true);
                  }}
                >
                  View
                </Button>
              </div>
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
export default TableDriver;
