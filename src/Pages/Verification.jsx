import axios from "axios";
import React, { lazy } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../Data/ErrorData";
const Header = lazy(() => import("../Components/Common/Header"));
const Footer = lazy(() => import("../Components/Common/Footer"));

// create sweet alert object
const Alert = withReactContent(Swal);

const Verification = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("verify");

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  const newAccVerify = () => {
    return (
      <>
        <p className="mb-5 font-Poppins text-lg">
          Confirm Your Email
          <br />
          Your email has been confirmed successfully. Thank you!
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

  const newAccError = () => {
    return <p className="mb-5 font-Poppins text-lg">{ErrorData["12"]}</p>;
  };

  const passData = () => {
    axios
      .post(process.env.REACT_APP_VERIFY_BACKEND_URL, {
        code: code,
      })
      .then((response) => {
        if (response.status === 200) {
          if (response.data === 200) return newAccVerify();
          else return newAccError();
        } else {
          setAlert("error", "Registration faild", ErrorData[500]);
        }
      })
      .catch((erro) => {
        setAlert("error", "Registration faild", ErrorData[500]);
      });
  };
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <div className="text-center">
          {code === "" || code === null ? (
            <p className="font-Poppins text-lg">Verification code is empty.</p>
          ) : (
            passData()
          )}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Verification;
