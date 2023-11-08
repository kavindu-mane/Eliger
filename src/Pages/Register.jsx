import React, { lazy, useState, useEffect, useCallback, useRef } from "react";
import { Button, Label, TextInput, Radio } from "flowbite-react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineError } from "react-icons/md";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../Data/ErrorData";
import ReCAPTCHA from "react-google-recaptcha";
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

const Register = ({ type = "customer" }) => {
  const [accType, setAccType] = useState(type);
  const [isConfPassword, setIsConfPassword] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [errorCode, setErrorCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [haveSession, setHaveSession] = useState(false);
  const navigate = useNavigate();
  const recaptchaRef = useRef();

  // session management function
  const session = useCallback(() => {
    axios
      .post("/session")
      .then((response) => {
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
  const handleSubmit = async (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    formData.append("captcha", token);
    // change loading state to true
    setIsLoading(true);
    // send data using axios post function
    axios
      .post("/register", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data === 200) setIsSuccess(true);
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

  // send emails again
  const reSendEmail = () => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("type", "register");
    // change loading state to true
    setIsLoading(true);
    axios
      .post("/resend", formData)
      .then((response) => {
        if (response.status === 200) {
          setAlert(
            "success",
            "Re-send verification code",
            "Re-send verification code to " + email
          );
          setIsLoading(false);
        } else {
          setAlert("error", "Registration faild", ErrorData[500]);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setAlert("error", "Registration faild", ErrorData[500]);
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
          <div className="relative my-28 flex h-auto w-full items-center justify-center px-6 sm:my-16 sm:px-10">
            {/* loading area - before user register */}
            {!isSuccess && (
              <form
                className="flex w-full max-w-lg flex-col gap-4"
                onSubmit={(e) => handleSubmit(e)}
              >
                {/* welcome */}
                <h1 className="text-3xl font-bold ">Welcome!</h1>
                {/* subtitle */}
                <p className="mb-5 mt-1 text-sm">
                  Enter your credentials to create your account
                </p>

                {/* account type */}
                <div className="flex justify-between">
                  <div className="me-1 w-full">
                    <Label
                      htmlFor="account"
                      value="Account Type"
                      className="after:ml-0.5 after:text-red-500 after:content-['*']"
                    />

                    <div className="flex w-full" id="account">
                      {/* customer */}
                      <Label className="me-1 w-full cursor-pointer">
                        <Radio
                          name="account-type"
                          value={"customer"}
                          className="inputs peer sr-only"
                          defaultChecked={accType === "customer" ? true : false}
                          onClick={() => setAccType("customer")}
                        />
                        <div className="flex h-14 w-full items-center justify-center rounded-md bg-gray-500 text-transparent peer-checked:bg-green-400 peer-checked:text-white">
                          <AiFillCheckCircle className="h-5 w-5" />
                          <span className="mx-2 font-semibold text-white">
                            Customer
                          </span>
                        </div>
                      </Label>

                      {/* vehicle-owner */}
                      <Label className="ms-1 w-full cursor-pointer">
                        <Radio
                          name="account-type"
                          value={"vehicle_owner"}
                          className="inputs peer sr-only"
                          defaultChecked={accType === "owner" ? true : false}
                          onClick={() => setAccType("owner")}
                        />
                        <div className="flex h-14 w-full items-center justify-center rounded-md bg-gray-500 text-transparent peer-checked:bg-green-400 peer-checked:text-white">
                          <AiFillCheckCircle className="h-5 w-5" />
                          <span className="mx-2 font-semibold text-white">
                            Vehicle Owner
                          </span>
                        </div>
                      </Label>
                    </div>
                  </div>
                </div>

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
                    />
                    {/* error text */}
                    {errorCode === 0 && errorContainer(errorCode)}
                  </div>
                  {/* last name */}
                  <div className="w-full sm:ms-1">
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
                    />
                    {/* error text */}
                    {errorCode === 1 && errorContainer(errorCode)}
                  </div>
                </div>

                {/* phone */}
                <div>
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
                  />
                  {/* error text */}
                  {[2, 6].includes(errorCode) && errorContainer(errorCode)}
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* error text */}
                  {[3, 7, 10].includes(errorCode) && errorContainer(errorCode)}
                </div>

                {/* address */}
                {accType === "owner" ? (
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
                    />
                    {/* error text */}
                    {errorCode === 11 && errorContainer(errorCode)}
                  </div>
                ) : (
                  <></>
                )}

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
                  {[4, 8, 9].includes(errorCode) && errorContainer(errorCode)}
                </div>

                {/* confirm password */}
                <div className="relative">
                  <Label
                    htmlFor="confirmPassword"
                    value="Confirm Password"
                    className="after:ml-0.5 after:text-red-500 after:content-['*']"
                  />

                  <TextInput
                    id="confirmPassword"
                    name="confirmPassword"
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

                {/* actions */}
                <div className="flex w-full flex-col space-y-4">
                  {/* submit */}
                  <Button
                    type="submit"
                    name="join"
                    value="join"
                    className="mt-5 w-2/3 place-self-center rounded-md bg-green-400 duration-300 ease-in dark:bg-emerald-500"
                  >
                    Join Free
                  </Button>

                  {/* redirect to login */}
                  <div className="text-center text-sm font-semibold">
                    Have an account?
                    <a
                      href="/login"
                      className="ms-1 text-green-500 dark:text-emerald-400"
                    >
                      Login
                    </a>
                  </div>
                </div>

                {/* recaptcha */}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                  size="invisible"
                />

                {/* agreement */}
                <div className="mt-5 w-2/3 place-self-center text-center font-ABeeZee text-[0.65rem] font-semibold">
                  By clicking “Sign up”, you agree to our
                  <a
                    href="/terms"
                    target="_blank"
                    className="mx-1 text-sky-600"
                  >
                    terms & conditions
                  </a>
                  and acknowledge that you have read and understand our
                  <a
                    href="/privacy"
                    target="_blank"
                    className="mx-1 text-sky-600"
                  >
                    privacy policy
                  </a>
                </div>
              </form>
            )}
            {/* loading area - after user register */}
            {isSuccess && (
              <div className="max-w-lg px-4 text-center">
                <h1 className="mb-3 text-2xl font-semibold">
                  Email Confirmation Required
                </h1>
                <h3>
                  We sent the email to your email. Check your inbox to activate
                  the account. If the confirmation email is not in your inbox,
                  please check the Spam. Thank you.
                </h3>
                <button
                  onClick={reSendEmail}
                  className="mt-5 text-sm italic text-sky-900 dark:text-amber-400"
                >
                  Re-send email
                </button>
              </div>
            )}
          </div>

          {/* footer */}
          <FooterSecondary />
        </div>
      )}
    </React.Fragment>
  );
};

export default Register;
