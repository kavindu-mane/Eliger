import React from "react";

import { BiLogOut } from "react-icons/bi";

const enable =
  "my-2 flex cursor-pointer items-center rounded-md p-2 text-start hover:bg-gray-300 dark:hover:bg-gray-900";
const disable = "my-2 flex items-center p-2  text-start";

const SideBar = ({ title, dataset }) => {
  return (
    <React.Fragment>
      {/* SideBar container */}

      <div className="h-full w-full bg-white p-2 pt-20 font-Poppins text-sm shadow-lg drop-shadow-lg dark:bg-slate-700">
        <div className="relative h-full pb-10 text-slate-800 dark:text-gray-100">
          {/* SideBar Heading */}

          <h1 className="mb-4 pl-4 text-start text-xl">{title}</h1>

          {/* Seperator */}

          <hr className="my-2 border border-transparent border-b-gray-300 dark:border-b-slate-600"></hr>

          {dataset.map((data, key) => {
            return (
              <>
                {/*Create Main Menu*/}
                <div key={key} className={data.enable ? enable : disable}>
                  {data.icon}
                  <span className="ml-4">{data.topic}</span>
                </div>
                {/*Create Sub menu */}
                {data.haveSub ? (
                  <div className="ms-5">
                    {data.subtopic.map((sbtopic, id) => {
                      return (
                        <div key={id} className={enable}>
                          {sbtopic.icon}
                          <span className="ml-4">{sbtopic.topic}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}

          {/* Seperator */}
          <hr className="my-2 border border-transparent border-b-gray-300 dark:border-b-slate-600"></hr>

          {/* Signout */}

          <div className="absolute bottom-2 start-0 flex cursor-pointer items-center rounded-md p-2 text-start hover:text-green-500 dark:hover:text-emerald-400">
            <BiLogOut className="h-5 w-5" />
            <span className="ml-4">Signout</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SideBar;
