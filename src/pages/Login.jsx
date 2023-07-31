import React, { lazy } from "react";
import { Button, Label, Checkbox, TextInput, Radio } from "flowbite-react";
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
          <form className="my-16 flex w-full max-w-sm flex-col gap-2 lg:my-5">
            {/* welcome */}
            <h1 className="text-2xl font-semibold ">Welcome back!</h1>
            {/* subtitle */}
            <p className="-mt-3 mb-5 text-sm">
              Enter your credentials to access your account
            </p>

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
            {/*checkbox*/}
            <div className="flex max-w-lg justify-between gap-4">
              <div className="flex items-center gap-2">
                <Checkbox defaultChecked id="accept" name="accept" />
                <Label
                  className="flex font-normal text-slate-900 dark:text-gray-200"
                  htmlFor="accept"
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

            {/* login */}
            <div className="text-center text-sm font-semibold">
              Don'have an account?{" "}
              <a
                href="/login"
                className="ms-1 text-green-500 dark:text-emerald-400"
              >
                Sign Up
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
