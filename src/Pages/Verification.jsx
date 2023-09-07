import axios from "axios";
import React, { lazy, useCallback, useEffect, useState } from "react";
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
  const [message, setMessage] = useState(0);

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

  // error text
  const newAccError = () => {
    return <p className="mb-5 font-Poppins text-lg">{ErrorData["12"]}</p>;
  };

  // submit code to backend
  const passData = useCallback(async() => {
    let formData = new FormData();
    formData.append("code", code);
    await axios
      .post("/verify", formData)
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
    if (code !== "") passData();
  }, [code, passData]);

  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <div className="text-center">
          {/* check query text is null or not */}
          {code === "" || code === null ? (
            <p className="font-Poppins text-lg">Verification code is empty.</p>
          ) : (
            <></>
          )}

          {/* if account verified show success message */}
          {message === 200 && newAccVerify()}

          {/* if error occurd show error message */}
          {message !== 200 && message !== 0 && newAccError()}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Verification;
