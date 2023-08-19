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
    topic: "Manage Accounts",
    enable: false,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: true,
    subtopic: [
      {
        topic: "Vehicle Owners",
        icon: <GiCarKey />,
      },
      {
        topic: "Customers",
        icon: <ImUsers />,
      },
      {
        topic: "Drivers",
        icon: <GiCarSeat />,
      },
    ],
  },
  {
    topic: "Manage Bookings",
    enable: true,
    icon: <MdCardMembership className="h-5 w-5" />,
    haveSub: false,
  },

  {
    topic: "Manage Vehicles",
    enable: true,
    icon: <MdCarRental className="h-5 w-5" />,
    haveSub: false,
  },
  {
    topic: "Manage Feedback",
    enable: true,
    icon: <VscFeedback className="h-5 w-5" />,
    haveSub: false,
  },

  {
    topic: "View User Messages",
    enable: true,
    icon: <MdViewSidebar className="h-5 w-5" />,
    haveSub: false,
  },
  {
    topic: "Review Reports",
    enable: true,
    icon: <MdRateReview className="h-5 w-5" />,
    haveSub: false,
  },
];

export default topics;
