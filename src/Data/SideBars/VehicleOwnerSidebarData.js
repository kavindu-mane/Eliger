import { VscRequestChanges } from "react-icons/vsc";
import { GiCarKey } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdCreate, MdOutlinePendingActions } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";

const topics = [
  {
    topic: "View Rent Out Bookings",
    enable: true,
    icon: <MdOutlinePendingActions className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },
  {
    topic: "View My Vehicles",
    enable: true,
    icon: <AiFillCar className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
  },
  {
    topic: "View My Drivers",
    enable: true,
    icon: <PiSteeringWheelFill className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },
  {
    topic: "Add Vehicle",
    enable: true,
    icon: <GiCarKey className="h-5 w-5" />,
    haveSub: false,
    compId: 3,
  },
  {
    topic: "Create Driver Account",
    enable: true,
    icon: <MdCreate className="h-5 w-5" />,
    haveSub: false,
    compId: 4,
  },
  {
    topic: "Edit  Account",
    enable: true,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: false,
    compId: 5,
  },
  {
    topic: "Statistics",
    enable: true,
    icon: <IoStatsChart className="h-5 w-5" />,
    haveSub: false,
    compId: 6,
  },
];

export default topics;
