import React, { lazy, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../Data/ErrorData";
import { MdOutlineError } from "react-icons/md";
const Circles = lazy(() => import("../Components/Common/Circles"));
const LoadingSpinner = lazy(() =>
  import("../Components/Common/LoadingSpinner")
);
const HeaderSecondary = lazy(() =>
  import("../Components/Common/HeaderSecondary")
);
const FooterSecondary = lazy(() =>
  import("../Components/Common/FooterSecondary")
);
const BackgroundEffect = lazy(() =>
  import("../Components/Common/BackgroundEffect")
);

// create sweet alert object
const Alert = withReactContent(Swal);

const ForgetPW = () => {
  const [errorCode, setErrorCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // submit registration form
  const handleSubmit = async (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    // change loading state to true
    setIsLoading(true);
    // send data using axios post function
    await axios
      .post("/reset_password", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response?.data === 200)
            setAlert(
              "success",
              "Success",
              "Successfully sent the email verification message to given email."
            );
          setIsLoading(false);
          setErrorCode(response.data);
        } else {
          setAlert("error", "Registration failed", ErrorData[500]);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setAlert("error", "Registration failed", ErrorData[500]);
        setIsLoading(false);
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

  return (
    <React.Fragment>
      {/* loading */}
      {isLoading && <LoadingSpinner />}

      <div className="relative flex min-h-screen w-screen flex-col items-center justify-center font-Poppins text-slate-700 dark:text-white ">
        {/* background effect */}
        <BackgroundEffect />
        {/* round effect component */}
        <Circles />
        {/* header */}
        <HeaderSecondary />

        {/* form */}
        <div className="my-28 flex h-auto w-full items-center justify-center px-6 sm:px-10">
          <form
            className="flex w-full max-w-lg flex-col gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              {/* welcome */}
              <h1 className="text-3xl font-bold ">Forget Password</h1>
              {/* subtitle */}
              <p className="mb-5 mt-1 text-sm">
                Enter your email to recover your account
              </p>
            </div>

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
              />
              {/* error text */}
              {[3, 7, 19].includes(errorCode) && errorContainer(errorCode)}
            </div>

            {/* submit */}
            <Button
              type="submit"
              name="reset"
              className="mt-5 w-2/3 place-self-center rounded-md bg-green-400 duration-300 ease-in dark:bg-emerald-500"
            >
              Send Code
            </Button>
          </form>
        </div>

        {/* footer */}
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};

export default ForgetPW;
