import React, { lazy, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, Button } from "flowbite-react";
const ManageCustomerAccount = lazy(() =>
  import("../Modals/Tables/ManageCustomerAccount")
);
const Paginations = lazy(() => import("../../Common/Paginations"));

const formData = new FormData();
formData.append("account_type", "customer");

const TableCustomer = () => {
  const [tableData, setTableData] = useState(null);
  const [pagesCount, setPagesCount] = useState(0);
  const [status, setStatus] = useState("verified");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);

  formData.append("status", status);

  // load data function
  const fetch = useCallback(async () => {
    setTableData(null);
    await axios
      .post("/load_accounts", formData)
      .then((response) => {
        if (response.data.length !== 0) {
          setTableData(response.data);
          setPagesCount(Math.ceil(response.data.length / 10));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // load data function run in component mount
  useEffect(() => {
    if (!isOpenModal) fetch();
  }, [fetch, status, isOpenModal]);

  return (
    <React.Fragment>
      {isOpenModal && (
        <ManageCustomerAccount
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          details={customerDetails}
        />
      )}
      <h1 className="w-full py-4 text-center font-Poppins text-xl font-medium md:text-2xl">
        Customer Accounts
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
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Full Name :&ensp;</span>
                {data.Customer_firstname} {data.Customer_lastname}
              </p>
              <p className="flex w-full truncate bg-slate-100 px-4 py-2 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800">
                <span className="block md:hidden">Phone :&ensp;</span>
                {data.Customer_Tel}
              </p>
              <p className="flex w-full truncate px-4 py-2">
                <span className="block md:hidden">Email :&ensp;</span>
                {data.Email}
              </p>
              <div className="flex w-full justify-end truncate bg-slate-100 px-4 py-2.5 group-hover:bg-gray-200 dark:bg-slate-900 group-hover:dark:bg-gray-800 md:justify-center">
                <Button
                  className="h-7 rounded-md !bg-transparent px-4 text-sky-500 duration-300 ease-in hover:!bg-transparent hover:text-sky-700"
                  onClick={() => {
                    setCustomerDetails(data);
                    setIsOpenModal(true);
                  }}
                >
                  View
                </Button>
              </div>
            </div>
          );
        })}
      <Paginations totpages={pagesCount} />
    </React.Fragment>
  );
};
export default TableCustomer;
