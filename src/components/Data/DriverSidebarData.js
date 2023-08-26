import { MdOutlineManageAccounts } from "react-icons/md";

import { GiCarSeat } from "react-icons/gi";


const topics = [
  {
    topic: "Edit Accounts",
    enable: true,
    icon: <GiCarSeat className="h-5 w-5" />,
    haveSub: false,
  },
  {
    topic: "View booking history",
    enable: true,
    icon: <MdOutlineManageAccounts className="h-5 w-5" />,
    haveSub: false,
  },
];

export default topics;
