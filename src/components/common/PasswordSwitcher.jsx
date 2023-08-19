import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const PasswordSwitcher = ({ isPassword, setIsPassword }) => {
  return (
    <div
      className="absolute bottom-3 end-2 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-300"
      onClick={() => setIsPassword(!isPassword)}
    >
      <AiFillEyeInvisible
        className={(isPassword ? "block" : "hidden") + " h-full w-full"}
      />
      <AiFillEye
        className={(!isPassword ? "block" : "hidden") + " h-full w-full"}
      />
    </div>
  );
};

export default PasswordSwitcher;
