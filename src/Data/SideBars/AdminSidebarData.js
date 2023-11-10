import {
  MdOutlineManageAccounts,
  MdSupportAgent,
  MdPendingActions,
  MdPayments,
} from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { GiCarKey, GiCarSeat } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { BiSolidMessageAdd } from "react-icons/bi";
import { RiPassPendingLine } from "react-icons/ri";
import { BiSolidBank } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";

const topics = [
  {
    topic: "New Vehicle Registrations",
    enable: true,
    icon: <BiSolidMessageAdd className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },
  {
    topic: "New Driver Registrations",
    enable: true,
    icon: <FaUserPlus className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
  },
  {
    topic: "New Bank Details Approval",
    enable: true,
    icon: <BiSolidBank className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },
  {
    topic: "Pending Vehicle Registrations",
    enable: true,
    icon: <MdPendingActions className="h-5 w-5" />,
    haveSub: false,
    compId: 3,
  },
  {
    topic: "Pending Driver Registrations",
    enable: true,
    icon: <RiPassPendingLine className="h-5 w-5" />,
    haveSub: false,
    compId: 4,
  },
  {
    topic: "Create Help & Support Account",
    enable: true,
    icon: <MdOutlineManageAccounts className="h-5 w-5" />,
    haveSub: false,
    compId: 5,
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
        enable: true,
        icon: <GiCarKey />,
        compId: 6,
      },
      {
        topic: "Customers",
        icon: <ImUsers />,
        compId: 7,
      },
      {
        topic: "Drivers",
        icon: <GiCarSeat />,
        compId: 8,
      },
      {
        topic: "Help & Support",
        icon: <MdSupportAgent />,
        compId: 9,
      },
    ],
  },
  {
    topic: "Payment Eligible Users",
    enable: true,
    icon: <MdPayments className="h-5 w-5" />,
    haveSub: false,
    compId: 10,
  },
];

export default topics;
