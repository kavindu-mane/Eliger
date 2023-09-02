import React, { lazy, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Button, Label, Checkbox, TextInput } from "flowbite-react";
import { MdOutlineError } from "react-icons/md";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../Data/ErrorData";
import { useNavigate } from "react-router-dom";

const Circles = lazy(() => import("../Components/Common/Circles"));
const HeaderSecondary = lazy(() =>
  import("../Components/Common/HeaderSecondary")
);
const FooterSecondary = lazy(() =>
  import("../Components/Common/FooterSecondary")
);
const BackgroundEffect = lazy(() =>
  import("../Components/Common/BackgroundEffect")
);
const PasswordSwitcher = lazy(() =>
  import("../Components/Common/PasswordSwitcher")
);

// create sweet alert object
const Alert = withReactContent(Swal);

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [errorCode, setErrorCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [haveSession, setHaveSession] = useState(false);
  const navigate = useNavigate();

  // session management function
  const session = useCallback(() => {
    axios
      .post("/session")
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) navigate("/dashboard");
        else setHaveSession(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  // session function run in component mount
  useEffect(() => {
    session();
  }, [session]);

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // submit registration form
  const handleSubmit = (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    // change loading state to true
    setIsLoading(true);
    // send data using axios post function
    axios
      .post("/login", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.status === 200) navigate("/dashboard");
          setIsLoading(false);
          setErrorCode(response.data);
        } else {
          setAlert("error", "Login faild", ErrorData[500]);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setAlert("error", "Login faild", ErrorData[500]);
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
      {/* outer div */}
      {haveSession && (
        <div className="relative flex min-h-screen w-screen flex-col items-center justify-center font-Poppins text-slate-700 dark:text-white ">
          {/* background effect */}
          <BackgroundEffect />
          {/* round effect component */}
          <Circles />
          {/* header */}
          <HeaderSecondary />
          {/* loading */}
          {isLoading && (
            <div className="absolute z-[999] flex h-full w-screen items-center justify-center bg-slate-950/60">
              <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
            </div>
          )}

          {/* form */}
          <div className="my-28 flex h-auto w-full items-center justify-center px-6 sm:my-16 sm:px-10">
            <form
              className="flex w-full max-w-lg flex-col gap-4"
              onSubmit={(e) => handleSubmit(e)}
            >
              {/* welcome */}
              <h1 className="text-2xl font-semibold ">Welcome back!</h1>
              {/* subtitle */}
              <p className="mb-5 mt-1 text-sm">
                Enter your credentials to access your account
              </p>

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
                {errorCode === 3 && errorContainer(errorCode)}
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
                {[7, 13].includes(errorCode) && errorContainer(errorCode)}
              </div>

              <div className="flex max-w-lg justify-between gap-4">
                <div className="flex items-center gap-2">
                  {/*checkbox*/}
                  <Checkbox id="remember" name="remember" />
                  <Label
                    className="flex font-normal text-slate-900 dark:text-gray-200"
                    htmlFor="remember"
                  >
                    Remember me
                  </Label>
                </div>
                <a
                  className="text-sm text-slate-900 hover:text-green-500 dark:text-gray-200 hover:dark:text-emerald-400"
                  href="/forget"
                >
                  Forgot password
                </a>
              </div>

              {/* submit */}
              <Button
                type="submit"
                name="join"
                value="join"
                className="mt-5 w-2/3 place-self-center rounded-md bg-green-400 duration-300 ease-in dark:bg-emerald-400"
              >
                Login
              </Button>

              {/* sign up */}
              <div className="text-center text-sm font-semibold">
                Don't have an account?{" "}
                <a
                  href="/ride"
                  className="ms-1 text-green-500 dark:text-emerald-400"
                  data-aos="fade-down"
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>

          {/* footer */}
          <FooterSecondary />
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
