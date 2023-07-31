import React, { lazy } from "react";
import { Button, Label, TextInput, Radio } from "flowbite-react";
const Circles = lazy(() => import("../components/Circles"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Register = () => {
  return (
    <React.Fragment>
      {/* outer div */}
      <div className="relative flex min-h-screen w-screen font-Poppins">
        {/* background effect */}
        <BackgroundEffect />
        {/* round effect component */}
        <Circles />

        {/* form */}
        <div className="flex h-full min-h-screen w-full items-center justify-center px-5 sm:px-10">
          <form className="my-16 flex w-full max-w-lg flex-col gap-4 lg:my-5">
            {/* welcome */}
            <h1 className="text-3xl font-bold ">Welcome!</h1>
            {/* subtitle */}
            <p className="-mt-3 mb-5 text-sm">
              Enter your credentials to create your account
            </p>

            {/* account type */}
            <div className="flex justify-between">
              {/* first name */}
              <div className="me-1 w-full">
                <Label
                  htmlFor="account"
                  value="Account Type"
                  className="after:ml-0.5 after:text-red-500 after:content-['*']"
                />

                <div className="" id="account">
                  <Radio
                    name="account-type"
                    value={"customer"}
                    className="inputs"
                  />
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
              <div className="mb-2 block">
                <Label
                  htmlFor="phone"
                  value="Phone No"
                  className="after:ml-0.5 after:text-red-500 after:content-['*']"
                />
              </div>
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
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Email"
                  className="after:ml-0.5 after:text-red-500 after:content-['*']"
                />
              </div>
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
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="address"
                  value="Address"
                  className="after:ml-0.5 after:text-red-500 after:content-['*']"
                />
              </div>
              <TextInput
                id="address"
                name="address"
                required
                type="text"
                className="inputs"
              />
            </div>

            {/* password */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Password"
                  className="after:ml-0.5 after:text-red-500 after:content-['*']"
                />
              </div>
              <TextInput
                id="password"
                name="password"
                required
                type="password"
                placeholder="********"
                className="inputs"
              />
            </div>

            {/* confirm password */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="confirmPassword"
                  value="Confirm Password"
                  className="after:ml-0.5 after:text-red-500 after:content-['*']"
                />
              </div>
              <TextInput
                id="confirmPassword"
                name="confirmPassword"
                required
                type="password"
                placeholder="********"
                className="inputs"
              />
            </div>

            {/* submit */}
            <Button
              type="submit"
              name="join"
              value="join"
              className="mt-5 w-2/3 place-self-center rounded-md bg-green-400 duration-300 ease-in dark:bg-emerald-400"
            >
              Join Free
            </Button>

            {/* login */}
            <div className="text-center text-sm font-semibold">
              Have an account?{" "}
              <a
                href="/login"
                className="ms-1 text-green-500 dark:text-emerald-400"
              >
                Login
              </a>
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
        <div className="absolute bottom-3 start-0 w-full text-center text-xs font-semibold text-gray-500">
          Copyrights 2023 eliger.com
          <a href="/privacy" target="_blank" className="mx-1">
            privacy policy
          </a>
          |
          <a href="/terms" target="_blank" className="mx-1">
            terms
          </a>
          |
          <a href="/faq" target="_blank" className="mx-1">
            FAQ
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
