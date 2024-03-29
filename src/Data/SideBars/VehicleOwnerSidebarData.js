import { VscRequestChanges } from "react-icons/vsc";
import { GiCarKey } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { PiSteeringWheelFill } from "react-icons/pi";
import { BiSolidBank } from "react-icons/bi";
import {
  MdCreate,
  MdOutlinePendingActions,
  MdDashboard,
  MdPayments,
} from "react-icons/md";

const topics = [
  {
    topic: "Dashboard",
    enable: true,
    icon: <MdDashboard className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },
  {
    topic: "View Rent Out Bookings",
    enable: true,
    icon: <MdOutlinePendingActions className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
  },
  {
    topic: "View My Vehicles",
    enable: true,
    icon: <AiFillCar className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },
  {
    topic: "View My Drivers",
    enable: true,
    icon: <PiSteeringWheelFill className="h-5 w-5" />,
    haveSub: false,
    compId: 3,
  },
  {
    topic: "Payments",
    enable: true,
    icon: <MdPayments className="h-5 w-5" />,
    haveSub: false,
    compId: 4,
  },
  {
    topic: "Add Vehicle",
    enable: true,
    icon: <GiCarKey className="h-5 w-5" />,
    haveSub: false,
    compId: 5,
  },
  {
    topic: "Create Driver Account",
    enable: true,
    icon: <MdCreate className="h-5 w-5" />,
    haveSub: false,
    compId: 6,
  },
  {
    topic: "Edit Account",
    enable: true,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: false,
    compId: 7,
  },
  {
    topic: "Bank Details",
    enable: true,
    icon: <BiSolidBank className="h-5 w-5" />,
    haveSub: false,
    compId: 8,
  },
];

export default topics;
