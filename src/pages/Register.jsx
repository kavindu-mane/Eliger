import React, { lazy, useState } from "react";
import { Button, Label, TextInput, Radio } from "flowbite-react";
import { AiFillCheckCircle } from "react-icons/ai";

const Circles = lazy(() => import("../components/common/Circles"));
const HeaderSecondary = lazy(() =>
  import("../components/common/HeaderSecondary")
);
const FooterSecondary = lazy(() =>
  import("../components/common/FooterSecondary")
);
const BackgroundEffect = lazy(() =>
  import("../components/common/BackgroundEffect")
);
const PasswordSwitcher = lazy(() =>
  import("../components/common/PasswordSwitcher")
);

const Register = ({ type = "customer" }) => {
  const [accType, setAccType] = useState(type);
  const [isConfPassword, setIsConfPassword] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  return (
    <React.Fragment>
      {/* outer div */}
      <div className="relative flex min-h-screen w-screen flex-col items-center justify-center font-Poppins text-slate-700 dark:text-white ">
        {/* background effect */}
        <BackgroundEffect />
        {/* round effect component */}
        <Circles />
        {/* header */}
        <HeaderSecondary />

        {/* form */}
        <div className="my-28 flex h-auto w-full items-center justify-center px-6 sm:my-16 sm:px-10">
          <form className="flex w-full max-w-lg flex-col gap-4">
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
                      value={"vehicle-owner"}
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

              {/* login */}
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

            {/* agreement */}
            <div className="mt-5 w-2/3 place-self-center text-center font-ABeeZee text-[0.65rem] font-semibold">
              By clicking “Sign up”, you agree to our
              <a href="/terms" target="_blank" className="mx-1 text-sky-600">
                terms & conditions
              </a>
              and acknowledge that you have read and understand our
              <a href="/privacy" target="_blank" className="mx-1 text-sky-600">
                privacy policy
              </a>
            </div>
          </form>
        </div>

        {/* footer */}
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};

export default Register;
