import React, { lazy, useRef, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { MdOutlineError } from "react-icons/md";
import ErrorData from "../../Data/ErrorData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const PasswordSwitcher = lazy(() =>
  import("../../Components/Common/PasswordSwitcher")
);
const LoadingSpinner = lazy(() => import("../Common/LoadingSpinner"));

// create sweet alert object
const Alert = withReactContent(Swal);

const EditAccount = ({ currentData, urlPath }) => {
  const [isCurrentPassword, setIsCurrentPassword] = useState(true);
  const [isConfPassword, setIsConfPassword] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isEmailPassword, setIsEmailPassword] = useState(true);
  const [currentExec, setCurrentExec] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const [isBasicBtnDisabled, setIsBasicBtnDisabled] = useState(true);
  const [isEmailBtnDisabled, setIsEmailBtnDisabled] = useState(true);
  const [isPasswordBtnDisabled, setIsPasswordBtnDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const phoneRef = useRef();
  const otpRef = useRef();

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // error messages
  const errorContainer = (errCode) => {
    return (
      <p className="flex items-center gap-x-1 font-Poppins text-sm font-semibold text-red-500">
        <MdOutlineError /> {ErrorData[errCode]}
      </p>
    );
  };

  // actions of the responses
  const responseAction = (response) => {
    if (response.status === 200) {
      if (response.data === 200) {
        setAlert("success", "Update success", "Details update successfully");
      } else if (response.data === 500)
        setAlert("error", "Update failed", ErrorData[500]);
      else if (response.data === 14) navigate("/login");
      setErrorCode(response.data);
    } else {
      setAlert("error", "Update failed", ErrorData[500]);
    }
  };

  // submit basic info form
  const handleSubmitBasicInfo = async (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    // send data using axios post function
    await axios
      .post(urlPath, formData)
      .then((response) => {
        responseAction(response);
      })
      .catch((error) => {
        setAlert("error", "Update failed", ErrorData[500]);
      });
  };

  // submit login info to change
  const handleSubmitLoginInfo = (e, val) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    formData.append(val, val);
    setCurrentExec(val);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, change it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        await axios
          .post("/update", formData)
          .then((response) => {
            responseAction(response);
            setIsLoading(false);
            if (response.data === 200) navigate("/login");
          })
          .catch((error) => {
            setIsLoading(false);
            setAlert("error", "Update failed", ErrorData[500]);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setAlert("error", "Cancelled", "Your imaginary file is safe.");
      }
    });
  };

  // request OTP
  const requestOTP = async () => {
    // clear previous errors
    setErrorCode(null);
    // get data from form fields as FormData object
    const formData = new FormData();
    formData.append("phone", phoneRef.current.value);
    // send data using axios post function
    await axios
      .post("request_phone_change", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data === 200) {
            setAlert("success", "Send OTP", "Send OTP to your number");
          } else if (response.data === 500)
            setAlert("error", "Update failed", ErrorData[500]);
          else if (response.data === 14) navigate("/login");
          setErrorCode(response.data);
        } else {
          setAlert("error", "Update failed", ErrorData[500]);
        }
      })
      .catch((error) => {
        setAlert("error", "Update failed", ErrorData[500]);
      });
  };

  // verify OTP
  const verifyOTP = async () => {
    // clear previous errors
    setErrorCode(null);
    // get data from form fields as FormData object
    const formData = new FormData();
    formData.append("otp", otpRef.current.value);
    // send data using axios post function
    await axios
      .post("verify_phone_change", formData)
      .then((response) => {
        responseAction(response);
      })
      .catch((error) => {
        setAlert("error", "Update failed", ErrorData[500]);
      });
  };

  return (
    <div className="flex w-full max-w-4xl flex-col justify-center">
      {/* loading */}
      {isLoading && <LoadingSpinner />}
      {/*Topic */}
      <h1 className="mb-5 font-Poppins text-2xl font-medium">
        Edit Account Details
      </h1>

      {/* basic info */}
      <h2 className="mb-1 mt-4 font-Poppins text-lg font-medium">
        Change basic info
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => handleSubmitBasicInfo(e)}
        onChange={() => setIsBasicBtnDisabled(false)}
      >
        {/* name */}
        <div className="flex flex-col justify-between sm:flex-row">
          {/* first name */}
          <div className="mb-4 w-full sm:mb-0 sm:me-1">
            <Label
              htmlFor="fname"
              value="First Name"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />

            <TextInput
              id="fname"
              name="fname"
              placeholder="John"
              required
              type="text"
              className="inputs"
              defaultValue={
                currentData?.Driver_firstname || currentData?.Owner_firstname
              }
            />
            {/* error text */}
            {errorCode === 0 && errorContainer(errorCode)}
          </div>
          {/* last name */}
          <div className="w-full sm:mb-0 sm:ms-1">
            <Label
              htmlFor="lname"
              value="Last Name"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />

            <TextInput
              id="lname"
              name="lname"
              placeholder="Tyler"
              required
              type="text"
              className="inputs"
              defaultValue={
                currentData?.Owner_lastname || currentData?.Driver_lastname
              }
            />
            {/* error text */}
            {errorCode === 1 && errorContainer(errorCode)}
          </div>
        </div>
        {/* address */}
        <div>
          <Label
            htmlFor="address"
            value="Address"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="address"
            name="address"
            required
            type="text"
            className="inputs"
            defaultValue={
              currentData?.Owner_address || currentData?.Driver_address
            }
          />
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* submit */}
        <button
          type="submit"
          name="submit"
          value="submit"
          disabled={isBasicBtnDisabled}
          className="mt-2 w-fit place-self-end rounded-md bg-green-400 px-3 py-2 font-Poppins text-xs font-semibold text-white duration-300 ease-in hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-emerald-500 dark:hover:bg-sky-600 dark:disabled:bg-gray-500 "
        >
          Update
        </button>
      </form>

      {/* whatsapp number */}
      <h2 className="mb-1 mt-4 font-Poppins text-lg font-medium">
        Change WhatsApp Number
      </h2>
      {/* WA number */}
      <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
        {/* phone */}
        <div className="mb-4 w-full sm:mb-0 sm:me-3">
          <Label
            htmlFor="phone"
            value="WhatsApp No"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="phone"
            name="phone"
            placeholder="94xxxxxxxxx"
            required
            type="text"
            className="inputs"
            defaultValue={currentData?.Owner_Tel || currentData?.Driver_Tel}
            ref={phoneRef}
          />
          {/* error text */}
          {[2, 6].includes(errorCode) && errorContainer(errorCode)}
        </div>
        <button
          onClick={() => {
            requestOTP();
          }}
          className="mt-2 h-10 w-48 place-self-end rounded-md bg-green-400 px-3 py-2 font-Poppins text-xs font-semibold text-white duration-300 ease-in hover:bg-sky-600 dark:bg-emerald-500 dark:hover:bg-sky-600"
        >
          Request OTP
        </button>
      </div>
      {/* OTP */}
      <div className="flex flex-col justify-between sm:flex-row sm:items-start">
        {/* otp input */}
        <div className="mb-4 w-full sm:mb-0 sm:me-3">
          <Label
            htmlFor="otp"
            value="OTP"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="otp"
            name="otp"
            placeholder="123456"
            required
            type="text"
            className="inputs"
            minLength={6}
            maxLength={6}
            ref={otpRef}
            style={{ letterSpacing: 30, textAlign: "center" }}
          />
          {/* error text */}
          {errorCode === 20 && errorContainer(errorCode)}
        </div>
        <button
          onClick={() => {
            verifyOTP();
          }}
          className="mt-2 h-10 w-48 place-self-end rounded-md bg-green-400 px-3 py-2 font-Poppins text-xs font-semibold text-white duration-300 ease-in hover:bg-sky-600 dark:bg-emerald-500 dark:hover:bg-sky-600"
        >
          Change Number
        </button>
      </div>

      {/* change email */}
      <h2 className="mb-1 mt-10 font-Poppins text-lg font-medium">
        Change Email
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => handleSubmitLoginInfo(e, "update_email")}
        onChange={() => setIsEmailBtnDisabled(false)}
      >
        {/* email */}
        <div>
          <Label
            htmlFor="email"
            value="Email"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="email"
            name="email"
            placeholder="example@domain.com"
            required
            type="email"
            className="inputs"
            defaultValue={currentData?.Email}
          />
          {/* error text */}
          {[3, 7, 10].includes(errorCode) && errorContainer(errorCode)}
        </div>
        {/* password */}
        <div className="relative">
          <Label
            htmlFor="password"
            value="Password"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="password"
            name="password"
            required
            type={isEmailPassword ? "password" : "text"}
            placeholder="********"
            className="inputs"
          />
          <PasswordSwitcher
            isPassword={isEmailPassword}
            setIsPassword={setIsEmailPassword}
          />
          {/* error text */}
          {[4, 18].includes(errorCode) &&
            currentExec === "update_email" &&
            errorContainer(errorCode)}
        </div>
        {/* submit */}
        <button
          type="submit"
          name="submit"
          value="submit"
          disabled={isEmailBtnDisabled}
          className="mt-2 w-fit place-self-end rounded-md bg-green-400 px-3 py-2 font-Poppins text-xs font-semibold text-white duration-300 ease-in hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-emerald-500 dark:hover:bg-sky-600 dark:disabled:bg-gray-500 "
        >
          Change Email
        </button>
      </form>

      {/* change password */}
      <h2 className="mb-1 mt-10 font-Poppins text-lg font-medium">
        Change Password
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => handleSubmitLoginInfo(e, "update_password")}
        onChange={() => setIsPasswordBtnDisabled(false)}
      >
        {/* exsisting password */}
        <div className="relative">
          <Label
            htmlFor="password"
            value="Current Password"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="password"
            name="password"
            required
            type={isCurrentPassword ? "password" : "text"}
            placeholder="********"
            className="inputs"
          />
          <PasswordSwitcher
            isPassword={isCurrentPassword}
            setIsPassword={setIsCurrentPassword}
          />
          {/* error text */}
          {[4, 18].includes(errorCode) &&
            currentExec === "update_password" &&
            errorContainer(errorCode)}
        </div>
        {/* New password */}
        <div className="relative">
          <Label
            htmlFor="newPassword"
            value="New Password"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="newPassword"
            name="newPassword"
            required
            type={isPassword ? "password" : "text"}
            placeholder="********"
            className="inputs"
          />
          <PasswordSwitcher
            isPassword={isPassword}
            setIsPassword={setIsPassword}
          />
          {/* error text */}
          {[17, 8, 9].includes(errorCode) && errorContainer(errorCode)}
        </div>
        {/* confirm new password */}
        <div className="relative">
          <Label
            htmlFor="confirmNewPassword"
            value="Confirm new Password"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="confirmNewPassword"
            name="confirmNewPassword"
            required
            type={isConfPassword ? "password" : "text"}
            placeholder="********"
            className="inputs"
          />
          <PasswordSwitcher
            isPassword={isConfPassword}
            setIsPassword={setIsConfPassword}
          />
          {/* error text */}
          {[5, 9].includes(errorCode) && errorContainer(errorCode)}
        </div>
        {/* submit */}
        <button
          type="submit"
          name="submit"
          value="submit"
          disabled={isPasswordBtnDisabled}
          className="mt-2 w-fit place-self-end rounded-md bg-green-400 px-3 py-2 font-Poppins text-xs font-semibold text-white duration-300 ease-in hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-emerald-500 dark:hover:bg-sky-600 dark:disabled:bg-gray-500 "
        >
          Change Password
        </button>
      </form>
    </div>
  );
};
export default EditAccount;
