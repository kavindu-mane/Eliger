import { lazy, useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../Data/ErrorData";
import { MdOutlineError } from "react-icons/md";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const PasswordSwitcher = lazy(() => import("../Common/PasswordSwitcher"));

// create sweet alert object
const Alert = withReactContent(Swal);

const CreateDriverAccount = () => {
  const [errorCode, setErrorCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfPassword, setIsConfPassword] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

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
      .post("/create_driver", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data === 200)
            setAlert(
              "success",
              "Registration success",
              "Successfully sent the email verification message to your email."
            );
          else if (response.data === 15)
            setAlert("error", "Registration failed", ErrorData[15]);
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
    <Card className="w-full max-w-4xl dark:bg-slate-900">
      {/* loading */}
      {isLoading && (
        <div className="absolute start-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-slate-950/60">
          <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
        </div>
      )}
      <div className="mb-3 text-center font-Poppins text-2xl font-medium tracking-wide">
        Create Driver Account
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        {/* name */}
        <div className="flex flex-col gap-4 lg:flex-row ">
          {/* first name */}
          <div className="w-full lg:w-1/2">
            <Label
              htmlFor="fname"
              value="First Name"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="fname"
              placeholder="John"
              required
              type="text"
              name="fname"
            />
            {/* error text */}
            {errorCode === 11 && errorContainer(errorCode)}
          </div>
          {/* last name */}
          <div className="w-full lg:w-1/2">
            <Label
              htmlFor="lname"
              value="Last Name"
              className="after:ml-0.5 after:text-red-500 after:content-['*']"
            />
            <TextInput
              id="lname"
              placeholder="Samual"
              required
              type="text"
              name="lname"
            />
            {/* error text */}
            {errorCode === 11 && errorContainer(errorCode)}
          </div>
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
            placeholder="abc@gmail.com"
            required
            type="email"
            name="email"
          />
          {/* error text */}
          {[7, 10].includes(errorCode) && errorContainer(errorCode)}
        </div>
        {/* phone number */}
        <div>
          <Label
            htmlFor="phone"
            value="Contact No"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />
          <TextInput
            id="phone"
            placeholder="+94xxxxxxxxx"
            required
            type="text"
            name="phone"
          />
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* passwords */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* password */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Label
                htmlFor="password"
                value="Initial Password"
                className="after:ml-0.5 after:text-red-500 after:content-['*']"
              />
              <TextInput
                id="password"
                placeholder="•••••••••"
                required
                type={isPassword ? "password" : "text"}
                name="password"
              />
              <PasswordSwitcher
                isPassword={isPassword}
                setIsPassword={setIsPassword}
              />
              {/* error text */}
              {errorCode === 11 && errorContainer(errorCode)}
            </div>
          </div>
          {/* confirm password */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Label
                htmlFor="confPassword"
                value="Confirm Initial Password"
                className="after:ml-0.5 after:text-red-500 after:content-['*']"
              />
              <TextInput
                id="confPassword"
                placeholder="•••••••••"
                required
                type={isConfPassword ? "password" : "text"}
                name="confPassword"
              />
              <PasswordSwitcher
                isPassword={isConfPassword}
                setIsPassword={setIsConfPassword}
              />
              {/* error text */}
              {errorCode === 11 && errorContainer(errorCode)}
            </div>
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
            required
            type="text"
            name="address"
            placeholder=""
          />
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* licence doc */}
        <div>
          <Label
            htmlFor="licence"
            value="Driving Licence"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <input
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-xs text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            id="licence"
            name="licence"
            type="file"
            accept=".png,.jpeg,.jpg"
          />
          <p className="text-end font-Poppins text-xs font-medium">
            Accept png , jpg , jpeg only.File size should be less than 2MB.
          </p>
        </div>
        <div className="mt-5 flex w-full justify-center font-Poppins">
          <Button type="submit" className="w-full max-w-sm">
            Create Account
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default CreateDriverAccount;
