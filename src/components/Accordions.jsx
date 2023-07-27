import React from "react";
import { Accordion } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";

const Accordions = ({ datafile }) => {
  return (
    <div>
      <Accordion
        data-aos="fade-left"
        className="border-none"
        arrowIcon={AiOutlinePlus}
      >
        {datafile.map((data) => {
          return (
            <Accordion.Panel key={data.id}>
              <Accordion.Title className="relative mb-3 rounded-t-xl border-none bg-white font-ABeeZee ring-1 ring-slate-300 focus:ring-1 focus:ring-slate-300 dark:bg-transparent dark:ring-slate-700 dark:focus:ring-slate-700">
                <span className="me-5">{String(data.id).padStart(2, "0")}</span>
                {data.question}
              </Accordion.Title>
              <Accordion.Content className="-mt-3 mb-5 rounded-b-xl bg-sky-50 ring-1 ring-slate-300 dark:ring-slate-700">
                <p className="mb-2 font-ABeeZee text-gray-600 dark:text-gray-400">
                  {data.answer}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          );
        })}
      </Accordion>
    </div>
  );
};
export default Accordions;
