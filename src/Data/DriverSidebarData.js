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
    topic: "View account",
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

];

export default topics;
