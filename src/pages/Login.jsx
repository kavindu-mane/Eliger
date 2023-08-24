import React, { lazy, useState } from "react";
import { Button, Label, Checkbox, TextInput } from "flowbite-react";

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

const Login = () => {
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
            <h1 className="text-2xl font-semibold ">Welcome back!</h1>
            {/* subtitle */}
            <p className="mb-5 mt-1 text-sm">
              Enter your credentials to access your account
            </p>

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

            <div className="flex max-w-lg justify-between gap-4">
              <div className="flex items-center gap-2">
                {/*checkbox*/}
                <Checkbox id="accept" name="accept" />
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

            {/* sign up */}
            <div className="text-center text-sm font-semibold">
              Don't have an account?{" "}
              <a
                href="/ride"
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
