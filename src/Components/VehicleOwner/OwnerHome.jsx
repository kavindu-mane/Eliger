import React, { useState, useCallback, useEffect } from "react";
import { Card, Rating, Tooltip } from "flowbite-react";
import Calendar from "react-calendar";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../Data/ErrorData";
import "react-calendar/dist/Calendar.css";
import { BiInfoCircle } from "react-icons/bi";

// create sweet alert object
const Alert = withReactContent(Swal);

const OwnerHome = ({ bankStatus }) => {
  const [events, setEvents] = useState({});
  const [homeDetails, setHomeDetails] = useState(null);
  const [driverIncomes, setDriverIncomes] = useState(null);
  const [date, setDate] = useState(new Date());

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // load data function
  const fetchUpcomming = useCallback(async () => {
    await axios
      .post("/get_upcomming_rentout_booking")
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          setEvents(response.data);
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  // load data function
  const fetchHomeDetails = useCallback(async () => {
    await axios
      .post("/load_owner_home_details")
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          setHomeDetails(response.data);
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  // load data function
  const fetchDriverIncome = useCallback(async () => {
    await axios
      .post("/load_drivers_daily_income")
      .then((response) => {
        if (response?.data?.length !== 0 && response?.data !== 500) {
          setDriverIncomes(response.data);
        }
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  // load data function run in component mount
  useEffect(() => {
    fetchUpcomming();
  }, [fetchUpcomming]);

  useEffect(() => {
    fetchHomeDetails();
  }, [fetchHomeDetails]);

  useEffect(() => {
    fetchDriverIncome();
  }, [fetchDriverIncome]);

  // convert date to colombo time zone
  const changeDateWithTimeZone = (date) => {
    const newDate = date
      .toLocaleDateString("en-US", { timeZone: "Asia/Colombo" })
      .split("/");
    return (
      newDate[2] +
      "-" +
      newDate[0].toString().padStart(2, "0") +
      "-" +
      newDate[1].toString().padStart(2, "0")
    );
  };

  return (
    <React.Fragment>
      {/* announcement */}
      <div className="flex w-full flex-col">
        {/* bank details - not submitted */}
        {bankStatus === "not submitted" && (
          <p className="mb-4 rounded-md bg-yellow-300 p-2 italic text-black">
            Bank details not submitted.
          </p>
        )}

        {/* bank details - pending */}
        {bankStatus === "pending" && (
          <p className="mb-4 rounded-md bg-yellow-300 p-2 italic text-black">
            Bank details waiting for approval.
          </p>
        )}

        {/* bank details - not submitted */}
        {bankStatus === "rejected" && (
          <p className="mb-4 rounded-md bg-red-600 p-2 italic text-white">
            Bank details rejected. please re-submit.
          </p>
        )}
      </div>
      <Card className="w-full bg-gradient-to-br from-[#DA4453] to-[#89216B] font-Poppins text-white lg:px-5">
        <p className="mb-5 text-2xl font-semibold tracking-wider md:text-3xl xl:text-4xl">
          Welcome !
        </p>
        {/* container */}
        <div className="flex flex-col items-center space-y-8 2xl:flex-row 2xl:items-start 2xl:justify-between 2xl:space-y-0">
          <div className="flex h-full w-full flex-col items-center space-y-8 xl:flex-row xl:items-start xl:justify-between xl:space-y-0 2xl:w-2/3">
            {/* left side */}
            <div className="flex h-full flex-col justify-between xl:w-1/2">
              {/* event title */}
              <div className="mb-5 h-full">
                <p className="font-ABeeZee font-semibold italic">
                  {changeDateWithTimeZone(date) ===
                  changeDateWithTimeZone(new Date())
                    ? "Today Events"
                    : date.toDateString() + " Events"}
                </p>
                {/* events */}
                <Rating className="mt-5 flex w-full flex-col items-start rounded-md bg-slate-900/[0.15] px-2 py-3 xl:h-5/6 xl:w-11/12">
                  {/* if events are available */}
                  {Object.keys(events).includes(changeDateWithTimeZone(date)) &&
                    events[changeDateWithTimeZone(date)].map((val, key) => {
                      return (
                        <div className="flex items-center" key={key}>
                          <Rating.Star className="text-white" />
                          <p className="ms-2 font-medium">{val}</p>
                        </div>
                      );
                    })}
                  {/* if events are not available */}
                  {!Object.keys(events).includes(
                    changeDateWithTimeZone(date)
                  ) && <p className="ms-2">No events available.</p>}
                </Rating>
              </div>
              {/* charges */}
              <div className="flex w-full">
                <Card className="mx-2 w-1/2 border-0 bg-red-500 shadow-lg drop-shadow-xl dark:bg-red-500">
                  <p className="font-medium">Current Charges</p>
                  <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                    Rs. {homeDetails?.Charges ?? 0}
                  </p>
                </Card>
                <Card className="mx-2 w-1/2 border-0 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                  <p className="font-medium">Current Balance</p>
                  <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                    Rs. {homeDetails?.Income ?? 0}
                  </p>
                </Card>
              </div>
            </div>
            {/* center */}
            <div className="flex h-full items-center md:w-1/2 lg:w-2/3 xl:w-1/2">
              <Calendar
                className={
                  "!w-full rounded-md text-gray-600 shadow-lg drop-shadow-lg"
                }
                minDate={new Date()}
                onClickDay={(day) => setDate(day)}
                showNeighboringMonth={false}
                tileClassName={({ date }) => {
                  const sortedDate = changeDateWithTimeZone(date);
                  if (Object.keys(events).includes(sortedDate)) {
                    return "react-calendar__tile--hasActive";
                  }
                }}
              />
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col text-white xl:ps-2">
            <p className="font-ABeeZee font-semibold">Today Earning</p>
            <div className="m-3 flex">
              <Card className="mx-2 w-full border-0 bg-sky-600 shadow-lg drop-shadow-xl dark:bg-sky-600">
                <p className="font-medium">
                  Total Income :{" "}
                  <span className="text-2xl md:text-3xl">
                    Rs.{" "}
                    {parseFloat(homeDetails?.daily_offline_total ?? 0) +
                      parseFloat(homeDetails?.daily_online_total ?? 0)}
                  </span>
                </p>
              </Card>
            </div>
            <div className="m-3 flex">
              <Card className="mx-2 border-0 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                <p className="font-medium">Online Payments</p>
                <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                  Rs. {homeDetails?.daily_online_total ?? 0}
                </p>
              </Card>
              <Card className="mx-2 border-0 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                <p className="font-medium">Offline Payments</p>
                <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                  Rs. {homeDetails?.daily_offline_total ?? 0}
                </p>
              </Card>
            </div>

            <p className="font-ABeeZee font-semibold ">This Month Earning</p>
            <div className="m-3 flex">
              <Card className="mx-2 w-full border-0 bg-sky-600 shadow-lg drop-shadow-xl dark:bg-sky-600">
                <p className="font-medium">
                  Total Income :{" "}
                  <span className="text-2xl md:text-3xl">
                    Rs.{" "}
                    {parseFloat(homeDetails?.monthly_offline_total ?? 0) +
                      parseFloat(homeDetails?.monthly_online_total ?? 0)}
                  </span>
                </p>
              </Card>
            </div>
            <div className="m-3 flex">
              <Card className="mx-2 border-0 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                <p className="font-medium">Online Payments</p>
                <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                  Rs. {homeDetails?.monthly_online_total ?? 0}
                </p>
              </Card>
              <Card className="mx-2 border-0 bg-emerald-500 shadow-lg drop-shadow-xl dark:bg-emerald-500">
                <p className="font-medium">Offline Payments</p>
                <p className="text-lg font-semibold sm:text-xl md:text-2xl">
                  Rs. {homeDetails?.monthly_offline_total ?? 0}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Card>
      {/* drivers details section */}
      <div className="mb-10 mt-20">
        <p className="mb-5 text-center text-2xl font-medium md:text-3xl xl:text-4xl">
          Drivers
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {driverIncomes &&
            driverIncomes?.map((row, key) => {
              return (
                <Card
                  key={key}
                  className="w-full shadow-xl drop-shadow-lg sm:w-96"
                >
                  <div className="flex items-center justify-between">
                    <p className="md:textxl font-Poppins text-xl font-medium xl:text-2xl">
                      {row?.Driver_firstname} <br />
                      {row?.Driver_lastname}
                    </p>
                    <p className="font-Poppins text-2xl font-medium text-emerald-600 dark:text-emerald-400 md:text-3xl xl:text-4xl">
                      #{key + 1}
                    </p>
                  </div>
                  <p className="font-ABeeZee font-semibold">Today Income</p>
                  <ul className="-mt-2 ms-6 list-disc">
                    <li className="">
                      Online : Rs. {row?.daily_offline_total}
                    </li>
                    <li className="">
                      Offline : Rs. {row?.daily_online_total}
                    </li>
                    <li className="">Total : {row?.today_total_income}</li>
                  </ul>
                  <div className="flex items-center font-ABeeZee font-semibold">
                    Driver need to pay
                    <Tooltip content="Book now offline payments owner share">
                      <BiInfoCircle className="ms-2 cursor-pointer text-blue-700 dark:text-blue-400" />
                    </Tooltip>
                  </div>
                  <ul className="-mt-2 ms-6 list-disc">
                    <li className="">
                      To owner : Rs. {row?.book_now_owner_income}
                    </li>
                  </ul>
                  <div className="flex items-center font-ABeeZee font-semibold">
                    Owner need to pay
                    <Tooltip content="Rent out offline payments driver share">
                      <BiInfoCircle className="ms-2 cursor-pointer text-blue-700 dark:text-blue-400" />
                    </Tooltip>
                  </div>
                  <ul className="-mt-2 ms-6 list-disc">
                    <li className="">
                      To driver : Rs. {row?.rent_out_driver_income}
                    </li>
                  </ul>
                </Card>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default OwnerHome;
