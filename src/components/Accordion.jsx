import React, { useState } from "react";
const Accordion = (props) => {
  const [data, setData] = useState(props.datas);

  const handleToggleActive = () => {
    let newActive = data.active === 1 ? 0 : 1;
    setData({ ...data, active: newActive });
  };
  return (
    <div
      className={`group mb-5 w-[400px] 
        rounded-md border border-[#c9c6c655] bg-sky-200 p-5
        duration-500 ${data.active === 1 ? 'is-active bg-sky-50' : ''}`}
    >
      <div className="flex items-center">
        <div
          className="w-full text-slate-950
          duration-0 group-[.is-active]:font-bold"
        >
          {data.question}
        </div>
        <div
          className="rotate-90 cursor-pointer text-xl  text-black
          duration-500 group-[.is-active]:rotate-[270deg]	
"
          onClick={handleToggleActive}
        >
          <h4>></h4>
        </div>
      </div>
      <div
        className="max-h-0 overflow-hidden text-slate-600
          duration-500 group-[.is-active]:max-h-[100px]	
"
      >
        {data.answer}
      </div>
    </div>
  );
};
export default Accordion;
