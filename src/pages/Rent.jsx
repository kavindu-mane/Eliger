import React, { lazy, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const Titles = lazy(() => import("../components/Titles"));
const BackgroundEffect = lazy(() => import("../components/BackgroundEffect"));

const Drive = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Header />

        {/* middle container */}
        <div className="relative flex h-full w-screen flex-col items-center">
          {/* bluer effect */}
          <BackgroundEffect />
          <Titles
            title={"Rent Vehicle"}
          />

          {/* card */}
          <div className="mb-20 flex w-fit justify-center rounded-md bg-gray-200 p-8 shadow-md drop-shadow-md dark:bg-gray-800">
            <form className="flex max-w-md flex-col gap-4 sm:w-96">
              {!isLogin ? (
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Your name" />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Firstname + Lastname"
                  />
                </div>
              ) : (
                <></>
              )}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@domain.com"
                  required
                  shadow
                  type="email"
                  name="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  id="password"
                  required
                  shadow
                  type="password"
                  placeholder="***********"
                  name="password"
                />
              </div>

              {!isLogin ? (
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="repeat-password" value="Repeat password" />
                  </div>
                  <TextInput
                    id="repeat-password"
                    required
                    shadow
                    type="password"
                    placeholder="***********"
                    name="verify-password"
                  />
                </div>
              ) : (
                <></>
              )}

              {!isLogin ? (
                <div className="flex items-center gap-2">
                  <Checkbox id="agree" className=" border-sky-500" />
                  <Label className="flex" htmlFor="agree">
                    I agree with the
                    <a
                      className="mx-2 text-cyan-600 hover:underline dark:text-cyan-500"
                      href="terms"
                    >
                      terms and conditions
                    </a>
                  </Label>
                </div>
              ) : (
                <></>
              )}

              <Button
                type="submit"
                name={isLogin ? "login" : "register"}
                className="mt-3"
              >
                {isLogin ? "Log in" : "Register new account"}
              </Button>

              <div className="flex font-noto text-sm">
                <p>{isLogin ? "Don't have" : "Have"} an account </p>
                <span
                  className="mx-2 text-cyan-600 hover:cursor-pointer dark:text-cyan-500"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Register" : "Log in"}
                </span>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Drive;
