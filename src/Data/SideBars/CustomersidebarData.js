import { MdCarRental, MdCardMembership, MdDeleteForever } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

const topics = [
  {
    topic: "Find Vehicles",
    enable: true,
    icon: <MdCarRental className="h-5 w-5" />,
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
    icon: <VscFeedback className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },
  {
    topic: "Edit my profile",
    enable: true,
    icon: <MdCardMembership className="h-5 w-5" />,
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
