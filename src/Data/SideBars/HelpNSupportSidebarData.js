import { MdCarRental, MdViewSidebar, MdCardMembership } from "react-icons/md";
import { VscRequestChanges, VscFeedback } from "react-icons/vsc";
import { GiCarKey, GiCarSeat } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { FiExternalLink } from "react-icons/fi";

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
        compId: 2,
      },
      {
        topic: "Customers",
        icon: <ImUsers />,
        compId: 3,
      },
      {
        topic: "Drivers",
        icon: <GiCarSeat />,
        compId: 4,
      },
    ],
  },
  {
    topic: "View Feedback",
    enable: true,
    icon: <VscFeedback className="h-5 w-5" />,
    haveSub: false,
    compId: 5,
  },

  {
    topic: (
      <a
        href="https://mail.google.com/"
        target="_blank"
        rel={"noreferrer"}
        className="flex gap-x-2 items-center"
      >
        View User Messages <FiExternalLink className="h-4 w-4" />
      </a>
    ),
    enable: true,
    icon: <MdViewSidebar className="h-5 w-5" />,
    haveSub: false,
    compId: 6,
  },
];

export default topics;
