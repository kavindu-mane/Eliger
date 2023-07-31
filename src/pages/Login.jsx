import React, { lazy } from "react";
import { Button, Label, Checkbox, TextInput, Radio } from "flowbite-react";
import { AiFillCheckCircle } from "react-icons/ai";

const Circles = lazy(() => import("../components/Circles"));
const HeaderSecondary = lazy(() => import("../components/HeaderSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Login = () => {
  return (
    <React.Fragment>
      {/* outer div */}
      <div className="relative flex min-h-screen w-screen font-Poppins">
        {/* background effect */}
        <BackgroundEffect />
        {/* round effect component */}
        <Circles />

        {/* header */}
        <HeaderSecondary />

        {/* form */}
        <div className="flex h-full min-h-screen w-full items-center justify-center px-5 sm:px-10">
          <form className="my-16 flex w-full max-w-sm flex-col gap-2 lg:my-5">
            {/* welcome */}
            <h1 className="text-2xl font-semibold ">Welcome back!</h1>
            {/* subtitle */}
            <p className="-mt-3 mb-5 text-sm">
              Enter your credentials to access your account
            </p>
            {/* fields div */}
            <div className="space-y-4" data-aos="zoom-in"></div>
            {/* email */}
            <div>
              <div className="flex justify-between" data-aos="fade-down">
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
              <div className="flex justify-between" data-aos="fade-down">
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
                  data-aos="fade-down"
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
              data-aos="fade-up"
              className="mt-5 w-2/3 place-self-center rounded-md bg-green-400 duration-300 ease-in dark:bg-emerald-400"
            >
              Login
            </Button>

            {/* login */}
            <div
              className="text-center text-sm font-semibold "
              data-aos="fade-down"
            >
              Don'have an account?{" "}
              <a
                href="/login"
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
    </React.Fragment>
  );
};

export default Login;
