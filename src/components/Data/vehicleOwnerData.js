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
    topic: "Manage Driver Account",
    enable: false,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: true,
    subtopic: [
      {
        topic: "Create Account",
        icon: <GiCarKey />,
      },
      {
        topic: "Add Account",
        icon: <ImUsers />,
      },
      {
        topic: "Remove Account",
        icon: <GiCarSeat />,
      },
    ],
  },
  {
    topic: "Manage Vehicle",
    enable: false,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: true,
    subtopic: [
      {
        topic: "Add Vehicle",
        icon: <GiCarKey />,
      },
      {
        topic: "Edit Vehicle",
        icon: <ImUsers />,
      },
      {
        topic: "Remove Vehicle",
        icon: <GiCarSeat />,
      },
    ],
  },
];

export default topics;
