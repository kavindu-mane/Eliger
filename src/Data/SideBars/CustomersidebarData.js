import { MdCarRental, MdDeleteForever, MdPayment } from "react-icons/md";
import { BiEdit, BiSolidFileFind } from "react-icons/bi";

const topics = [
  {
    topic: "Find Vehicles",
    enable: true,
    icon: <BiSolidFileFind className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },
  {
    topic: "View my bookings",
    enable: true,
    icon: <MdCarRental className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
  },
  {
    topic: "View my payments",
    enable: true,
    icon: <MdPayment className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },
  {
    topic: "Edit my profile",
    enable: true,
    icon: <BiEdit className="h-5 w-5" />,
    haveSub: false,
    compId: 3,
  },
  {
    topic: "Delete my profile",
    enable: true,
    icon: <MdDeleteForever className="h-5 w-5" />,
    haveSub: false,
    compId: 4,
  },
];

export default topics;
