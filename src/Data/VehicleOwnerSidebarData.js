import { VscRequestChanges } from "react-icons/vsc";
import { GiCarKey } from "react-icons/gi";
import { ImUsers } from "react-icons/im";

const topics = [
  {
    topic: "Create Driver Account",
    enable: true,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: false,
    compId: 0,
  },
  {
    topic: "View My Drivers",
    enable: true,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: false,
    compId: 1,
  },
  {
    topic: "Manage Vehicle",
    enable: false,
    icon: <VscRequestChanges className="h-5 w-5" />,
    haveSub: true,
    compId: 0,
    subtopic: [
      {
        topic: "Add Vehicle",
        icon: <GiCarKey />,
        compId: 2,
      },
      {
        topic: "Edit Vehicle",
        icon: <ImUsers />,
        compId: 3,
      },
    ],
  },
  {
    topic: "View My Vehicles",
    enable: true,
    icon: <VscRequestChanges className="h-5 w-5" />,
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
];

export default topics;
