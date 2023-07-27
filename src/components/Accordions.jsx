import React from "react";
import { Accordion } from "flowbite-react";

const Accordions = ({ datafile }) => {
  return (
    <div>
      <div>
        <Accordion>
          {datafile.map((data) => {
            return (
              <Accordion.Panel>
                <Accordion.Title>{data.question}</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {data.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};
export default Accordions;
