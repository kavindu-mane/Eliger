import axios from "axios";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const enable =
  "my-2 flex cursor-pointer items-center rounded-md p-2 text-start hover:bg-gray-300 dark:hover:bg-gray-900";
const disable = "my-2 flex items-center p-2  text-start pointer-events-none";

const SideBar = ({ title, dataset, setActiveComp }) => {
  const [menuOpen, setMenuOpen] = useState(false || window.innerWidth > 1024);
  const navigate = useNavigate();

  const logout = () => {
    axios
      .post("/logout")
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/login");
      });
  };

  return (
    <React.Fragment>
      {/* SideBar container */}
      <div className="h-full w-full bg-white p-2 pt-20 font-Poppins text-sm shadow-lg drop-shadow-lg dark:bg-slate-700">
        <div className="relative h-full text-slate-800 dark:text-gray-100">
          {/* SideBar Heading */}

          <div className="flex items-center justify-between px-4">
            <h1 className="text-start text-xl">{title}</h1>
            {menuOpen ? (
              <RiCloseFill
                className="cursor-pointer text-2xl font-bold lg:hidden"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <RiMenu3Fill
                className="cursor-pointer text-2xl font-bold lg:hidden"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

          <div
            className={"lg:block " + (menuOpen ? "pb-10" : "hidden")}
            id="sidbar-content"
          >
            {/* Seperator */}
            <hr className="mb-2 mt-6 border border-transparent border-b-gray-300 dark:border-b-slate-600"></hr>

            {dataset.map((data, key) => {
              return (
                <div key={key}>
                  {/*Create Main Menu*/}
                  <div
                    className={data.enable ? enable : disable}
                    onClick={() => setActiveComp(data.compId)}
                  >
                    {data.icon}
                    <span className="ml-4">{data.topic}</span>
                  </div>
                  {/*Create Sub menu */}
                  {data.haveSub ? (
                    <div className="ms-5">
                      {data.subtopic.map((sbtopic, id) => {
                        return (
                          <div
                            key={id}
                            className={enable}
                            onClick={() => setActiveComp(sbtopic.compId)}
                          >
                            {sbtopic.icon}
                            <span className="ml-4">{sbtopic.topic}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}

            {/* Seperator */}
            <hr className="my-2 border border-transparent border-b-gray-300 dark:border-b-slate-600"></hr>

            {/* Signout */}
            <div
              onClick={() => logout()}
              className="absolute bottom-2 start-0 flex cursor-pointer items-center rounded-md p-2 text-start hover:text-green-500 dark:hover:text-emerald-400"
            >
              <BiLogOut className="h-5 w-5" />
              <span className="ml-4">Signout</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SideBar;
