import {
  MdRateReview,
  MdCarRental,
  MdViewSidebar,
  MdCardMembership,
} from "react-icons/md";
import { VscRequestChanges, VscFeedback } from "react-icons/vsc";
import { GiCarKey, GiCarSeat } from "react-icons/gi";
import { ImUsers } from "react-icons/im";

const topics = [
  {
    topic: "Manage Bookings",
    enable: true,
    icon: <MdCardMembership className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },

  {
    topic: "Manage Vehicles",
    enable: true,
    icon: <MdCarRental className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
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
        compId: 5,
      },
      {
        topic: "Customers",
        icon: <ImUsers />,
        compId: 6,
      },
      {
        topic: "Drivers",
        icon: <GiCarSeat />,
        compId: 7,
      },
    ],
  },
  {
    topic: "Manage Feedback",
    enable: true,
    icon: <VscFeedback className="h-5 w-5" />,
    haveSub: false,
    compId: 2,
  },

  {
    topic: "View User Messages",
    enable: true,
    icon: <MdViewSidebar className="h-5 w-5" />,
    haveSub: false,
    compId: 3,
  },
  {
    topic: "Review Reports",
    enable: true,
    icon: <MdRateReview className="h-5 w-5" />,
    haveSub: false,
    compId: 4,
  },
];

export default topics;
