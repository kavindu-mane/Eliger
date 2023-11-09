import axios from "axios";
import React, { lazy, useCallback, useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../Data/ErrorData";
import { BsFillShieldLockFill } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
const Header = lazy(() => import("../Components/Common/Header"));
const Footer = lazy(() => import("../Components/Common/Footer"));
const LoadingSpinner = lazy(() =>
  import("../Components/Common/LoadingSpinner")
);

// create sweet alert object
const Alert = withReactContent(Swal);

const Verification = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState(0);
  const [loading, setLoading] = useState(false);
  const code = searchParams.get("verify");
  const recaptchaRef = useRef();

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // success text
  const newAccVerify = () => {
    return (
      <>
        <p className="mb-5 font-Poppins text-lg">
          Confirm Your Account
          <br />
          Your Account has been confirmed successfully. Thank you!
        </p>
        <a
          href="/login"
          className="rounded-md bg-green-500 px-3 py-1.5 text-white hover:bg-green-600"
        >
          Login
        </a>
      </>
    );
  };

  const newAccOTPVerify = () => {
    return (
      <form
        className="flex flex-col items-center px-3"
        onSubmit={(e) => submitOTP(e)}
      >
        <div className="mx-auto mb-5 w-fit rounded-full bg-slate-800 p-4 text-emerald-400 dark:bg-white">
          <BsFillShieldLockFill size={30} />
        </div>
        <p className="mb-5 text-center font-Poppins text-xl font-medium">
          Enter your OTP
        </p>
        <p className="mb-12 font-Poppins text-sm">
          Your OTP has been sent via WhatsApp to your {message} number
        </p>
        <TextInput
          name="otp"
          placeholder="123456"
          className="inputs max-w-sm text-xl"
          style={{ letterSpacing: 30, textAlign: "center" }}
          maxLength={6}
          minLength={6}
          type="number"
          autoComplete="off"
        />
        <button
          type="submit"
          className="my-5 flex w-full items-center justify-center gap-1 rounded bg-emerald-600 py-2.5 text-white"
        >
          Verify OTP
        </button>
      </form>
    );
  };

  // error text
  const newAccError = (error) => {
    return <p className="my-5 font-Poppins text-lg">{ErrorData[error]}</p>;
  };

  // submit code to backend
  const passData = useCallback(async () => {
    let formData = new FormData();
    formData.append("code", code);
    setLoading(true);
    await axios
      .post("/verify", formData)
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data);
        } else {
          setAlert("error", "Registration faild", ErrorData[500]);
        }
        setLoading(false);
      })
      .catch((erro) => {
        setLoading(false);
        setAlert("error", "Registration faild", ErrorData[500]);
      });
  }, [code]);

  // submit otp to backend
  const submitOTP = async (e) => {
    // clear previous errors
    setMessage(0);
    // remove default form submission
    e.preventDefault();
    let formData = new FormData(e.target);
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    formData.append("captcha", token);
    setLoading(true);

    await axios
      .post("/verify_otp", formData)
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data);
        } else {
          setAlert(
            "error",
            "OTP verification failed",
            "Please submit correct OTP"
          );
        }
        setLoading(false);
      })
      .catch((erro) => {
        setLoading(false);
        setAlert("error", "OTP verification failed", ErrorData[500]);
      });
  };

  // submit function run component mounting
  useEffect(() => {
    if (code !== "") passData();
  }, [code, passData]);

  return (
    <React.Fragment>
      {loading && <LoadingSpinner />}
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <div className="text-center">
          {/* check query text is null or not */}
          {code === "" || code === null ? (
            <p className="font-Poppins text-lg">Verification code is empty.</p>
          ) : (
            <></>
          )}

          {/* otp verification component */}
          {(message.length === 11 || message === 20) && newAccOTPVerify()}

          {/* if account verified show success message */}
          {message === 200 && newAccVerify()}

          {/* if error occurd show error message */}
          {![0, 200, 20].includes(message) &&
            message.length !== 11 &&
            code !== null &&
            newAccError("12")}

          {/* wrong otp message */}
          {message === 20 && newAccError("20")}
        </div>
        <Footer />
      </div>
      {/* recaptcha */}
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
        size="invisible"
      />
    </React.Fragment>
  );
};

export default Verification;
