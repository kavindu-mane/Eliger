import React, { lazy, useCallback, useEffect, useState } from "react";
import AccountOption from "../../Data/AdminGraph/AccountOption";
import VehicleOption from "../../Data/AdminGraph/VehicleOption";
import axios from "axios";
import Swal from "sweetalert2";
import ErrorData from "../../Data/ErrorData";
import withReactContent from "sweetalert2-react-content";
const Graphs = lazy(() => import("../Common/Graphs"));

// create sweet alert object
const Alert = withReactContent(Swal);

const HelpGraphs = () => {
  const [accountStats, setAccountStats] = useState(null);
  const [vehicleStats, setVehicleStats] = useState(null);

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // load data function - accounts
  const fetchAccountStats = useCallback(() => {
    axios
      .post("/load_accounts_stats")
      .then((response) => {
        if (response.status === 200) {
          let past = [0, 0, 0];
          let current = [0, 0, 0];
          response.data?.forEach((element) => {
            if (
              element?.date_range === "current" &&
              element?.Account_Type === "customer"
            )
              current[0] = element?.count;
            else if (
              element?.date_range === "past" &&
              element?.Account_Type === "customer"
            )
              past[0] = element?.count;
            else if (
              element?.date_range === "current" &&
              element?.Account_Type === "driver"
            )
              current[1] = element?.count;
            else if (
              element?.date_range === "past" &&
              element?.Account_Type === "driver"
            )
              past[1] = element?.count;
            else if (
              element?.date_range === "current" &&
              element?.Account_Type === "vehicle_owner"
            )
              current[2] = element?.count;
            else if (
              element?.date_range === "past" &&
              element?.Account_Type === "vehicle_owner"
            )
              past[2] = element?.count;
          });
          setAccountStats({
            past: past,
            current: current,
          });
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  // load data function - vehicles
  const fetchVehicleStats = useCallback(() => {
    axios
      .post("/load_vehicle_stats")
      .then((response) => {
        if (response.status === 200) {
          let past = [0, 0, 0, 0];
          let current = [0, 0, 0, 0];
          response.data?.forEach((element) => {
            if (
              element?.date_range === "current" &&
              element?.Vehicle_Type === "bike"
            )
              current[0] = element?.count;
            else if (
              element?.date_range === "past" &&
              element?.Vehicle_Type === "bike"
            )
              past[0] = element?.count;
            else if (
              element?.date_range === "current" &&
              element?.Vehicle_Type === "car"
            )
              current[1] = element?.count;
            else if (
              element?.date_range === "past" &&
              element?.Vehicle_Type === "car"
            )
              past[1] = element?.count;
            else if (
              element?.date_range === "current" &&
              element?.Vehicle_Type === "tuk-tuk"
            )
              current[2] = element?.count;
            else if (
              element?.date_range === "past" &&
              element?.Vehicle_Type === "tuk-tuk"
            )
              past[2] = element?.count;
            else if (
              element?.date_range === "current" &&
              element?.Vehicle_Type === "van"
            )
              current[3] = element?.count;
            else if (
              element?.date_range === "past" &&
              element?.Vehicle_Type === "van"
            )
              past[3] = element?.count;
          });
          setVehicleStats({
            past: past,
            current: current,
          });
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  // load data function run in component mount
  useEffect(() => {
    fetchAccountStats();
    fetchVehicleStats();
  }, [fetchAccountStats, fetchVehicleStats]);

  // account chart
  const accountsData = {
    labels: ["Customer", "Driver", "Vehicle Owner"],
    datasets: [
      {
        data: accountStats?.past ?? [0, 0, 0],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#059669",
      },
      {
        data: accountStats?.current ?? [0, 0, 0],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#ea580c",
      },
    ],
  };

  // vehicle chart
  const vehicleData = {
    labels: ["Bike", "Cars", "Tuk Tuk", "Van"],
    datasets: [
      {
        data: vehicleStats?.past ?? [0, 0, 0, 0],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#d61c4e",
      },
      {
        data: vehicleStats?.current ?? [0, 0, 0, 0],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#2d4059",
      },
    ],
  };

  // date settings - months
  const dateSettingsMonths = [
    {
      start: 59,
      end: 30,
    },
    {
      start: 29,
      end: 0,
    },
  ];

  return (
    <div className="flex h-auto flex-wrap pb-12">
      <h1 className="w-full py-4 text-center font-Poppins text-xl font-medium md:text-2xl">
        Statistics
      </h1>
      {/* graph 1 */}
      <div className="flex w-full justify-center xl:w-1/2">
        <Graphs
          options={AccountOption}
          data={accountsData}
          title={
            <span>
              New Registrations
              <small className="ms-1 text-sm font-bold italic">
                - Account Type Vs Amount
              </small>
            </span>
          }
          dateSettings={dateSettingsMonths}
        />
      </div>
      {/* graph 2 */}
      <div className="flex w-full justify-center xl:w-1/2">
        <Graphs
          options={VehicleOption}
          data={vehicleData}
          title={
            <span>
              New Registrations
              <small className="ms-1 text-sm font-bold italic">
                - Vehicle Type Vs Amount
              </small>
            </span>
          }
          dateSettings={dateSettingsMonths}
        />
      </div>
    </div>
  );
};

export default HelpGraphs;
