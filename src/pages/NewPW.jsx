import React, { lazy, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
const Circles = lazy(() => import("../components/Circles"));
const HeaderSecondary = lazy(() => import("../components/HeaderSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));
const PasswordSwitcher = lazy(() => import("../components/PasswordSwitcher"));

const Register = () => {
  const [isConfPassword, setIsConfPassword] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  return (
    <React.Fragment>
      {/* outer div */}
      <div className="relative flex min-h-screen w-screen flex-col font-Poppins text-slate-700 dark:text-white">
        {/* background effect */}
        <BackgroundEffect />
        {/* round effect component */}
        <Circles />
        {/* header */}
        <HeaderSecondary />

        {/* form */}
        <div className="flex h-full min-h-screen w-full items-center justify-center px-6 sm:px-10">
          <form className="my-28 flex w-full max-w-lg flex-col gap-4 sm:my-20 lg:my-5">
            <div>
              {/* welcome */}
              <h1 className="text-3xl font-bold ">Recover Account</h1>
              {/* subtitle */}
              <p className="mb-5 mt-1 text-sm">
                Enter your new password to recover your account
              </p>
            </div>

            {/* password */}
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

            {/* submit */}
            <Button
              type="submit"
              name="join"
              value="join"
              className="mt-5 w-2/3 place-self-center rounded-md bg-green-400 duration-300 ease-in dark:bg-emerald-500"
            >
              Reset Password
            </Button>
          </form>
        </div>

        {/* footer */}
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};

export default Register;
