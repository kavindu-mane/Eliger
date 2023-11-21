import React, { lazy, useEffect, useCallback, useState } from "react";
import AccountOption from "../../Data/AdminGraph/AccountOption";
import VehicleOption from "../../Data/AdminGraph/VehicleOption";
import RevenueOption from "../../Data/AdminGraph/RevenueOption";
import BookingOption from "../../Data/AdminGraph/BookingOption";
import axios from "axios";
import Swal from "sweetalert2";
import ErrorData from "../../Data/ErrorData";
import withReactContent from "sweetalert2-react-content";
const Graphs = lazy(() => import("../Common/Graphs"));

// create sweet alert object
const Alert = withReactContent(Swal);

const StatGraphs = () => {
  const [accountStats, setAccountStats] = useState(null);
  const [vehicleStats, setVehicleStats] = useState(null);
  const [revenueStats, setRevenueStats] = useState(null);
  const [bookingStats, setBookingStats] = useState(null);
  // week days
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // day labels
  const dayLable = Array.from({ length: 7 }, (_, i) => {
    let today = new Date();
    today.setDate(today.getDate() + i - 6);
    return weekDays[today.getDay()];
  });

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

  // load data function - revenue
  const fetchRevenueStats = useCallback(() => {
    axios
      .post("/load_accounts_revenue")
      .then((response) => {
        if (response.status === 200) {
          let past = [0, 0, 0, 0, 0, 0, 0];
          let current = [0, 0, 0, 0, 0, 0, 0];
          response.data?.forEach((element) => {
            if (element?.date_range === "current-7") current[0] = element?.sum;
            else if (element?.date_range === "past-7") past[0] = element?.sum;
            else if (element?.date_range === "current-6")
              current[1] = element?.sum;
            else if (element?.date_range === "past-6") past[1] = element?.sum;
            else if (element?.date_range === "current-5")
              current[2] = element?.sum;
            else if (element?.date_range === "past-5") past[2] = element?.sum;
            else if (element?.date_range === "current-4")
              current[3] = element?.sum;
            else if (element?.date_range === "past-4") past[3] = element?.sum;
            else if (element?.date_range === "current-3")
              current[4] = element?.sum;
            else if (element?.date_range === "past-3") past[4] = element?.sum;
            else if (element?.date_range === "current-2")
              current[5] = element?.sum;
            else if (element?.date_range === "past-2") past[5] = element?.sum;
            else if (element?.date_range === "current-1")
              current[6] = element?.sum;
            else if (element?.date_range === "past-1") past[6] = element?.sum;
          });
          setRevenueStats({
            past: past,
            current: current,
          });
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  // load data function - booking
  const fetchBookingStats = useCallback(() => {
    axios
      .post("/load_accounts_bookings")
      .then((response) => {
        if (response.status === 200) {
          let past = [0, 0, 0, 0, 0, 0, 0];
          let current = [0, 0, 0, 0, 0, 0, 0];
          response.data?.forEach((element) => {
            if (element?.date_range === "current-7")
              current[0] = element?.count;
            else if (element?.date_range === "past-7") past[0] = element?.count;
            else if (element?.date_range === "current-6")
              current[1] = element?.count;
            else if (element?.date_range === "past-6") past[1] = element?.count;
            else if (element?.date_range === "current-5")
              current[2] = element?.count;
            else if (element?.date_range === "past-5") past[2] = element?.count;
            else if (element?.date_range === "current-4")
              current[3] = element?.count;
            else if (element?.date_range === "past-4") past[3] = element?.count;
            else if (element?.date_range === "current-3")
              current[4] = element?.count;
            else if (element?.date_range === "past-3") past[4] = element?.count;
            else if (element?.date_range === "current-2")
              current[5] = element?.count;
            else if (element?.date_range === "past-2") past[5] = element?.count;
            else if (element?.date_range === "current-1")
              current[6] = element?.count;
            else if (element?.date_range === "past-1") past[6] = element?.count;
          });
          setBookingStats({
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
    fetchRevenueStats();
    fetchBookingStats();
  }, [
    fetchAccountStats,
    fetchVehicleStats,
    fetchRevenueStats,
    fetchBookingStats,
  ]);

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

  // revenue chart
  const revenueData = {
    labels: dayLable,
    datasets: [
      {
        data: revenueStats?.past ?? [0, 0, 0, 0, 0, 0, 0],
        borderWidth: 2,
        borderColor: "#C70039",
        backgroundColor: "#C70039",
      },
      {
        data: revenueStats?.current ?? [0, 0, 0, 0, 0, 0, 0],
        borderWidth: 2,
        borderColor: "#22A699",
        backgroundColor: "#22A699",
      },
    ],
  };

  // booking chart
  const bookingData = {
    labels: dayLable,
    datasets: [
      {
        data: bookingStats?.past ?? [0, 0, 0, 0, 0, 0, 0],
        borderWidth: 2,
        borderColor: "#9A208C",
        backgroundColor: "#9A208C",
      },
      {
        data: bookingStats?.current ?? [0, 0, 0, 0, 0, 0, 0],
        borderWidth: 2,
        borderColor: "#3A8891",
        backgroundColor: "#3A8891",
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

  // date settings - months
  const dateSettingsWeeks = [
    {
      start: 13,
      end: 7,
    },
    {
      start: 6,
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
      {/* graph 3 */}
      <div className="flex w-full justify-center xl:w-1/2">
        <Graphs
          type="line"
          options={RevenueOption}
          data={revenueData}
          title={"Days vs Revenue"}
          dateSettings={dateSettingsWeeks}
        />
      </div>
      {/* graph 4 */}
      <div className="flex w-full justify-center xl:w-1/2">
        <Graphs
          type="line"
          options={BookingOption}
          data={bookingData}
          title={"Days Vs Booking"}
          dateSettings={dateSettingsWeeks}
        />
      </div>
    </div>
  );
};

export default StatGraphs;
