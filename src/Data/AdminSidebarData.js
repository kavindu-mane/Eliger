import {
  MdOutlineManageAccounts,
  MdSupportAgent,
  MdPendingActions,
} from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { GiCarKey, GiCarSeat } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { BiSolidMessageAdd } from "react-icons/bi";

const topics = [
  {
    topic: "New Vehicle Registrations",
    enable: true,
    icon: <BiSolidMessageAdd className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },
  {
    topic: "Create Help & Support Account",
    enable: true,
    icon: <MdOutlineManageAccounts className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
  },
  {
    topic: "Pending Registrations",
    enable: true,
    icon: <MdPendingActions className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },
  {
    topic: "Manage Accounts",
    enable: false,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: true,
    compId: 0,
    subtopic: [
      {
        topic: "Vehicle Owners",
        icon: <GiCarKey />,
        compId: 3,
      },
      {
        topic: "Customers",
        icon: <ImUsers />,
        compId: 4,
      },
      {
        topic: "Drivers",
        icon: <GiCarSeat />,
        compId: 5,
      },
      {
        topic: "Help & Support",
        icon: <MdSupportAgent />,
        compId: 6,
      },
    ],
  },
];

export default topics;
