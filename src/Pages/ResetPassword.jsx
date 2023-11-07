import axios from "axios";
import React, { lazy, useCallback, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Label, TextInput } from "flowbite-react";
import { MdOutlineError } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../Data/ErrorData";
const Header = lazy(() => import("../Components/Common/Header"));
const Footer = lazy(() => import("../Components/Common/Footer"));
const PasswordSwitcher = lazy(() =>
  import("../Components/Common/PasswordSwitcher")
);
const LoadingSpinner = lazy(() =>
  import("../Components/Common/LoadingSpinner")
);

// create sweet alert object
const Alert = withReactContent(Swal);

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState(0);
  const [errorCode, setErrorCode] = useState(null);
  const [isConfPassword, setIsConfPassword] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const code = searchParams.get("verify");
  const navigate = useNavigate();

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
      if (response.data === 200)
        setAlert("success", "Success", "Password reset successfully");
      else if (response.data === 500)
        setAlert("error", "Update failed", ErrorData[500]);
      setErrorCode(response.data);
    } else {
      setAlert("error", "Update failed", ErrorData[500]);
    }
  };

  // submit login info to change
  const handleSubmitLoginInfo = async (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    formData.append("code", code);
    setIsLoading(true);
    await axios
      .post("/reset_password", formData)
      .then((response) => {
        setIsLoading(false);
        responseAction(response);
        if (response.data === 200) navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        setAlert("error", "Update failed", ErrorData[500]);
      });
  };

  // success text
  const resetPasswordInputs = () => {
    return (
      <div className="flex w-screen max-w-2xl flex-col justify-center px-3">
        <h2 className="mb-5 w-full text-start font-Poppins text-lg font-medium md:text-xl">
          Reset Password
        </h2>
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={(e) => handleSubmitLoginInfo(e, "update_password")}
        >
          {/* New password */}
          <div className="relative flex w-full flex-col items-start">
            <Label
              htmlFor="newPassword"
              value="New Password"
              className="mb-1 after:ml-0.5 after:text-red-500 after:content-['*']"
            />

            <TextInput
              id="newPassword"
              name="newPassword"
              required
              type={isPassword ? "password" : "text"}
              placeholder="********"
              className="inputs w-full"
            />
            <PasswordSwitcher
              isPassword={isPassword}
              setIsPassword={setIsPassword}
            />
            {/* error text */}
            {[17, 8, 9].includes(errorCode) && errorContainer(errorCode)}
          </div>
          {/* confirm new password */}
          <div className="relative flex w-full flex-col items-start">
            <Label
              htmlFor="confirmNewPassword"
              value="Confirm new Password"
              className="mb-1 after:ml-0.5 after:text-red-500 after:content-['*']"
            />

            <TextInput
              id="confirmNewPassword"
              name="confirmNewPassword"
              required
              type={isConfPassword ? "password" : "text"}
              placeholder="********"
              className="inputs w-full"
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
            className="mt-2 w-fit place-self-end rounded-md bg-green-400 px-3 py-2 font-Poppins text-xs font-semibold text-white duration-300 ease-in hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-emerald-500 dark:hover:bg-sky-600 dark:disabled:bg-gray-500 "
          >
            Reset Password
          </button>
        </form>
      </div>
    );
  };

  // error text
  const resetCodeError = () => {
    return <p className="mb-5 font-Poppins text-lg">{ErrorData["12"]}</p>;
  };

  // submit code to backend
  const passData = useCallback(async () => {
    let formData = new FormData();
    formData.append("code", code);
    await axios
      .post("/verify_reset_request", formData)
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data);
        } else {
          setAlert("error", "Registration faild", ErrorData[500]);
        }
      })
      .catch((erro) => {
        setAlert("error", "Registration faild", ErrorData[500]);
      });
  }, [code]);

  // submit function run component mounting
  useEffect(() => {
    if (code === "" || code === null) navigate("/forget");
    if (code !== "") passData();
  }, [code, passData, navigate]);

  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        {/* loading */}
        {isLoading && <LoadingSpinner />}
        <Header />
        <div className="text-center">
          {/* if account verified show success message */}
          {message === 200 && resetPasswordInputs()}
          {/* if error occurd show error message */}
          {message !== 200 && message !== 0 && resetCodeError()}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
