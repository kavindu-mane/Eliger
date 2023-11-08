import React, { lazy, useState, useRef } from "react";
import { Label, TextInput } from "flowbite-react";
import { MdOutlineError } from "react-icons/md";
import ErrorData from "../../Data/ErrorData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReCAPTCHA from "react-google-recaptcha";

const PasswordSwitcher = lazy(() => import("../Common/PasswordSwitcher"));
const LoadingSpinner = lazy(() => import("../Common/LoadingSpinner"));

// create sweet alert object
const Alert = withReactContent(Swal);

const DeleteMyProfile = ({ currentData }) => {
  const [isPassword, setIsPassword] = useState(true);
  const [errorCode, setErrorCode] = useState(null);
  const [isEmailBtnDisabled, setIsEmailBtnDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const recaptchaRef = useRef();

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
        setAlert(
          "success",
          "Delete success",
          "Your account delete successfully"
        );
      else if (response.data === 500)
        setAlert("error", "Delete failed", ErrorData[500]);
      else if (response.data === 14) navigate("/login");
      setErrorCode(response.data);
    } else {
      setAlert("error", "Delete failed", ErrorData[500]);
    }
  };

  // submit login info to change
  const handleDelete = async (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    formData.append("captcha", token);

    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        await axios
          .post("/delete_customer", formData)
          .then((response) => {
            setIsLoading(false);
            responseAction(response);
            if (response.data === 200) navigate("/login");
          })
          .catch((error) => {
            setIsLoading(false);
            setAlert("error", "Delete failed", ErrorData[500]);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setAlert("error", "Cancelled", "Your imaginary file is safe.");
      }
    });
  };

  return (
    <div className="flex h-full w-full max-w-2xl flex-col justify-center">
      {/* loading */}
      {isLoading && <LoadingSpinner />}
      {/*Topic */}
      <h1 className="mb-5 text-2xl font-medium text-red-500">Delete Account</h1>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => handleDelete(e)}
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
          {[3, 7].includes(errorCode) && errorContainer(errorCode)}
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
            type={isPassword ? "password" : "text"}
            placeholder="********"
            className="inputs"
          />
          <PasswordSwitcher
            isPassword={isPassword}
            setIsPassword={setIsPassword}
          />
          {/* error text */}
          {[4, 18].includes(errorCode) && errorContainer(errorCode)}
        </div>
        {/* submit */}
        <button
          type="submit"
          name="submit"
          value="submit"
          disabled={isEmailBtnDisabled}
          className="mt-2 w-fit place-self-end rounded-md bg-red-400 px-3 py-2 font-Poppins text-xs font-semibold text-white duration-300 ease-in hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-red-500 dark:hover:bg-sky-600 dark:disabled:bg-gray-500 "
        >
          Delete Account
        </button>
      </form>
      {/* recaptcha */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
        size="invisible"
      />
    </div>
  );
};
export default DeleteMyProfile;
