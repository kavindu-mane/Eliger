import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 start-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-slate-950/60">
      <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
    </div>
  );
};

export default LoadingSpinner;
