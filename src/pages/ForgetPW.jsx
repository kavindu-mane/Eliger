import React, { lazy } from "react";
import { Button, Label, TextInput } from "flowbite-react";
const Circles = lazy(() => import("../components/Circles"));
const HeaderSecondary = lazy(() => import("../components/HeaderSecondary"));
const FooterSecondary = lazy(() => import("../components/FooterSecondary"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const ForgetPW = () => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen w-screen flex-col items-center justify-center font-Poppins text-slate-700 dark:text-white ">
        {/* background effect */}
        <BackgroundEffect />
        {/* round effect component */}
        <Circles />
        {/* header */}
        <HeaderSecondary />

        {/* form */}
        <div className="my-28 flex h-auto w-full items-center justify-center px-6 sm:px-10">
          <form className="flex w-full max-w-lg flex-col gap-4">
            <div>
              {/* welcome */}
              <h1 className="text-3xl font-bold ">Forget Password</h1>
              {/* subtitle */}
              <p className="mb-5 mt-1 text-sm">
                Enter your email to recover your account
              </p>
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

            {/* submit */}
            <Button
              type="submit"
              name="join"
              value="join"
              className="mt-5 w-2/3 place-self-center rounded-md bg-green-400 duration-300 ease-in dark:bg-emerald-500"
            >
              Send Code
            </Button>
          </form>
        </div>

        {/* footer */}
        <FooterSecondary />
      </div>
    </React.Fragment>
  );
};

export default ForgetPW;
