import React, { lazy, useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { MdOutlineError } from "react-icons/md";
import ErrorData from "../../Data/ErrorData";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const PasswordSwitcher = lazy(() =>
  import("../../Components/Common/PasswordSwitcher")
);

// create sweet alert object
const Alert = withReactContent(Swal);

// error messages
const errorContainer = (errCode) => {
  return (
    <p className="flex items-center gap-x-1 font-Poppins text-sm font-semibold text-red-500">
      <MdOutlineError /> {ErrorData[errCode]}
    </p>
  );
};

const EditMyProfile = () => {
  const [isConfPassword, setIsConfPassword] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [errorCode, setErrorCode] = useState(null);
  const [ setIsLoading] = useState(false);
  const [setIsSuccess] = useState(false);
 

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // submit form
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
      .post(process.env.REACT_APP_REGISTER_BACKEND_URL, formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data === 200) setIsSuccess(true);
          setIsLoading(false);
          setErrorCode(response.data);
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

  return (
    <Card className="w-full max-w-2xl border-none bg-transparent dark:bg-transparent">
      {/*Topic */}
      <h1 className="text-1.5xl font-bold ">Edit Account Details</h1>
      <form className="flex flex-col gap-4">
        {(e) => handleSubmit(e)}
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
            />
            {/* error text */}
            {errorCode === 1 && errorContainer(errorCode)}
          </div>
        </div>
        {/* phone */}
        <div>
          <Label
            htmlFor="phone"
            value="Phone No"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <TextInput
            id="phone"
            name="phone"
            placeholder="+94xxxxxxxxx"
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
            // onChange={(e) => setEmail(e.target.value)}
          />
          {/* error text */}
          {[3, 7, 10].includes(errorCode) && errorContainer(errorCode)}
        </div>
        {/* exsistingpassword */}
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
        {/* New password */}
        <div className="relative">
          <Label
            htmlFor="password"
            value="New Password"
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
        {/* confirm new password */}
        <div className="relative">
          <Label
            htmlFor="confirmPassword"
            value="Confirm new Password"
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
            value="Submit"
            className="mt-5 w-2/3 place-self-center rounded-md bg-green-400 duration-300 ease-in dark:bg-emerald-500"
          >
            Update
          </Button>
        </div>
      </form>
    </Card>
  );
}; 
export default EditMyProfile;


