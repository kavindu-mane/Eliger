import { MdOutlineManageAccounts, MdPayments } from "react-icons/md";
import { GiCarSeat } from "react-icons/gi";
import { BiSolidBank } from "react-icons/bi";

const topics = [
  {
    topic: "View Request",
    enable: true,
    icon: <GiCarSeat className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },
  {
    topic: "Payments",
    enable: true,
    icon: <MdPayments className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
  },
  {
    topic: "Edit Driver Account",
    enable: true,
    icon: <MdOutlineManageAccounts className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },
  {
    topic: "Bank Details",
    enable: true,
    icon: <BiSolidBank className="h-5 w-5" />,
    haveSub: false,
    compId: 3,
  },
];

export default topics;
