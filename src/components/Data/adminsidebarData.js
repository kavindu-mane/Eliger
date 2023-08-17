import { MdOutlineManageAccounts, MdSupportAgent } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { GiCarKey, GiCarSeat } from "react-icons/gi";
import { ImUsers } from "react-icons/im";

const topics = [
  {
    topic: "Create Help & Support Account",
    enable: true,
    icon: <MdOutlineManageAccounts className="h-5 w-5" />,
    haveSub: false,
  },
  {
    topic: "Manage Accounts",
    enable: false,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: true,
    subtopic: [
      {
        topic: "Vehicle Owners",
        icon: <GiCarKey />,
      },
      {
        topic: "Customers",
        icon: <ImUsers />,
      },
      {
        topic: "Drivers",
        icon: <GiCarSeat />,
      },
      {
        topic: "Help & Support",
        icon: <MdSupportAgent />,
      },
    ],
  },
];

export default topics;
