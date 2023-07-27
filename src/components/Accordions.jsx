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
                <Accordion.Title><span className="me-5">{String(data.id).padStart(2, '0')}</span>{data.question}</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-600 dark:text-gray-400">
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
