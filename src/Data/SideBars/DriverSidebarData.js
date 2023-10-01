import { MdOutlineManageAccounts } from "react-icons/md";
import { GiCarSeat } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";

const topics = [
  {
    topic: "View Request",
    enable: true,
    icon: <GiCarSeat className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },
  {
    topic: "Edit Driver Account",
    enable: true,
    icon: <MdOutlineManageAccounts className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
  },
  {
    topic: "Statistics",
    enable: true,
    icon: <IoStatsChart className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },
];

export default topics;
