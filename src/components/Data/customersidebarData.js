import {
  MdRateReview,
  MdCarRental,
  MdViewSidebar,
  MdCardMembership,
} from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

const topics = [
  
      {
        topic: "Edit my profile",
        enable: true,
        icon: <MdCardMembership className="h-5 w-5" />,
        haveSub: false,
      },

      {
        topic: "View my bookings",
        enable: true,
        icon: <MdCarRental className="h-5 w-5" />,
        haveSub: false,
      },
      {
        topic: "View old payments",
        enable: true,
        icon: <VscFeedback className="h-5 w-5" />,
        haveSub: false,
      },

      {
        topic: "View favourite vehicles",
        enable: true,
        icon: <MdViewSidebar className="h-5 w-5" />,
        haveSub: false,
      },
      
    ];
  

export default topics;
