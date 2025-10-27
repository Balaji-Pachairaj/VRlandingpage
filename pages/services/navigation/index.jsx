import { motion, steps } from "framer-motion";

import Bulb from "../../../components/Bulb";
import Circles from "../../../components/Circles";
import ServiceSlider from "../../../components/ServiceSlider";
import { fadeIn } from "../../../variants";
import { GiTwoCoins } from "react-icons/gi";
import ParticlesContainer from "../../../components/ParticlesContainer";
import { GiWarlockEye } from "react-icons/gi";
import { PiMonitorPlayFill } from "react-icons/pi";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";
import {
  FaIndustry,
  FaTools,
  FaCar,
  FaCity,
  FaUserGraduate,
  FaShieldAlt,
  FaGasPump,
  FaCogs,
} from "react-icons/fa";
import { BsGrid, BsHeadsetVr } from "react-icons/bs";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiSewingMachine } from "react-icons/gi";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { HiMiniPuzzlePiece } from "react-icons/hi2";
import { FaListUl } from "react-icons/fa";
import Avatar from "../../../components/Avatar";
import CountUp from "react-countup";
import StepComponent from "../../../components/StepComponent";
import BubbleContent from "../../../components/BubbleContent";
import TitleAndSubComponent from "../../../components/titleAndSubTextComponent";

const serviceData = [
  {
    Icon: BsHeadsetVr,
    iconColor: "#0774BA",
    title: "A Virtual Model",
    description:
      "That digitally mirrors the physical entity and updates in real-time",
    link: "/services/digitalTwin",
  },
  {
    Icon: HiMiniPuzzlePiece,
    iconColor: "#6F2F90",
    title: "Physical Entities",
    description:
      "Physical Entities are digitally twinned. Real-world objects or collaterals such as machinery, buildings, objects and even people!",
  },
  {
    Icon: BsGrid,
    iconColor: "#D7128C",
    title: "Tools & Algorithms",
    description:
      "Tools and algorithms process data to derive analytical insights, to predict performance and simulate behaviour.",
  },
  {
    Icon: FaListUl,
    iconColor: "#0774BA",
    title: "Continuous Data",
    description:
      "Continuous data stream are fed from sensors & IoTs that provide real-time updates about the physical counterpart",
  },
];

const applicationsItems = [
  {
    Icon: FaIndustry,
    iconColor: "#0077FF",
    title: "Industrial Surveillance",
  },
  {
    Icon: FaGasPump,
    iconColor: "#E91E63",
    title: "Oil and Gas Industry",
  },
  {
    Icon: FaCogs,
    iconColor: "#9C27B0",
    title: "Design and Prototyping",
  },
  {
    Icon: FaCar,
    iconColor: "#03A9F4",
    title: "Automotive Industry",
  },
  {
    Icon: FaCity,
    iconColor: "#9C27B0",
    title: "Smart Cities and Urban Planning",
  },
  {
    Icon: FaShieldAlt,
    iconColor: "#2196F3",
    title: "Site Safety",
  },
  {
    Icon: FaUserGraduate,
    iconColor: "#E91E63",
    title: "Training and Education",
  },
  {
    Icon: FaTools,
    iconColor: "#9C27B0",
    title: "Maintenance and Support",
  },
];

const verticlesItems = [
  {
    Icon: FaTools,
    iconColor: "#9C27B0",
    title: "Combat Training",
  },
  {
    Icon: FaCogs,
    iconColor: "#9C27B0",
    title: "Collaborative VR",
  },
  {
    Icon: FaUserGraduate,
    iconColor: "#E91E63",
    title: "Real Estate, architecture & Interiors",
  },
  {
    Icon: FaGasPump,
    iconColor: "#E91E63",
    title: "Sport Training",
  },
  {
    Icon: FaShieldAlt,
    iconColor: "#E91E63",
    title: "Robotic Surgery",
  },
];

//   title: "",
//   description: "",
//   stepsItems: [
//     {
//       title: "",
//       description: "",
//     },
//   ],

const maritimeChallenge = {
  title: "Maritime Challenge",
  stepsItems: [
    {
      title:
        "Your nation thrives on a strong fishing culture and maritime commerce activities",
      description: "",
    },
    {
      title:
        "Smaller vessels and fishing boats often lack automatic tracking systems",
      description: "",
    },
    {
      title: "Many such vessels go missing without a trace",
      description: "",
    },
    {
      title:
        "Growing number of boats poses a challenge for Coast Guard, Navy and Marine Police ",
      description: "",
    },
  ],
};

const howItWorks = {
  title: "How It Works?",
  description: "",
  stepsItems: [
    {
      title: "OceanLink Satellite Tracker",
      description: "It is installed in each vessel ",
    },
    {
      title: "Tracker collects",
      description: "GPS coordinates periodically",
    },
    {
      title: "Using satellite communication",
      description: "tracker transmits data directly to OceanLink server",
    },
    {
      title: "OceanLink Dashboard",
      description: "Live positions, Movement history and Alerts",
    },
    {
      title: "Operates in No Network Zones",
      description: "Functions 24×7 even in rough weathers ",
    },
    {
      title: "All data",
      description: "Access solely belong to your nation/ government",
    },
    {
      title: "Centralised Server System",
      description: "Controlled exclusively by your nation/ government",
    },
  ],
};

const systemEnhancementPossibilities = {
  title: "System Enhancement Possibilities ",
  description:
    "Ocean Link capabilities can be expanded in collaboration with government departments",
  stepsItems: [
    {
      title: "Insurance integration",
    },
    {
      title: "Port charge management",
    },
    {
      title: "Next of kin contact information",
    },
    {
      title: "Other emergency use data",
    },
  ],
};

const ourSolutionOceanLink = {
  title: "Our Solution: OceanLink",
  stepsItems: [
    {
      title: "Coverage",
      description: "Global two-way communication ",
    },
    {
      title: "Works in",
      description: "No Network Zones",
    },
    {
      title: "GPS Accuracy",
      description: "Sub-5-meter precision",
    },
    {
      title: "Logs",
      description: "all GPS data with periodic updates ",
    },
    {
      title: "Marine grade build",
      description: "fireproof, tamperproof, waterproof and buoyant",
    },
    {
      title: "Distress alert",
      description: "Coast Guard Command Centre",
    },
    {
      title: "Tamper alert",
      description: "when device is removed or damaged.",
    },
    {
      title: "Geofence breach",
      description: "alert during boundary violations",
    },
    {
      title: "Low power design",
      description: "using specific algorithm",
    },
  ],
};

// Technical Components
// 1.	Coast guard Vessel: Central Server System and rugged tablet interface
// 2.	Small & Fishing Boats: Easily installable Ocean Link core device

const technicalComponents = {
  title: "Technical Components",
  description: "",
  stepsItems: [
    {
      title: "Coast guard Vessel",
      description: "Central Server System and rugged tablet interface",
    },
    {
      title: "Small & Fishing Boats",
      description: "Easily installable Ocean Link core device",
    },
  ],
};

// Core Objectives

// 1.	Identification & verification: of fishing fleet without boarding
// 2.	SOS signal transmission: by smaller vessels
// 3.	Storm or Overdue situations: Search, locate, verify, assist and rescue
// 4.	Electronic identification: always traceable by rescue team
// 5.	Detect: unauthorised & foreign vessels
// 6.	Prevent: inadvertent fishing in foreign waters
// 7.	Command and Control: All data relayed to a central server
// 8.	Manage: National Maritime Records and Maritime Vessel Information

const coreObjectives = {
  title: "Core Objectives",
  stepsItems: [
    {
      title: "Identification & verification",
      description: "of fishing fleet without boarding",
    },
    {
      title: "SOS signal transmission",
      description: "by smaller vessels",
    },
    {
      title: "Storm or Overdue situations",
      description: "Search, locate, verify, assist and rescue",
    },
    {
      title: "Electronic identification",
      description: "always traceable by rescue team",
    },
    {
      title: "Detect",
      description: "unauthorised & foreign vessels",
    },
    {
      title: "Prevent",
      description: "inadvertent fishing in foreign waters",
    },
    {
      title: "Command and Control",
      description: "All data relayed to a central server",
    },
    {
      title: "Manage",
      description: "National Maritime Records and Maritime Vessel Information",
    },
  ],
};

// Extended Infrastructure
// Authorised patrol vessels will be fitted with antennae:
// 1.	Detect vessels in vicinity
// 2.	Real-time Augmented Plotting of boats & vessels
// 3.	Relay information to central system

const extendedInfrastructure = {
  title: "Extended Infrastructure",
  description: "Authorised patrol vessels will be fitted with antennae",
  stepsItems: [
    {
      title: "Detect vessels in vicinity",
    },
    {
      title: "Real-time Augmented Plotting of boats & vessels",
    },
    {
      title: "Relay information to central system",
    },
  ],
};

const Services = () => {
  return (
    <div className=" w-full h-full bg-primary/30  flex items-center lg:pt-[10rem] md:pt-[16.5rem] sm:pt-[17rem] pt-[14rem]  overflow-auto overflow-x-hidden">
      {/* <ParticlesContainer /> */}
      <Circles />
      <div className="pb-24 md:pb-0 container mx-auto h-full flex flex-col justify-start md:gap-[1rem] gap-[0.5rem]">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-5xl text-2xl font-[600] mb-8 xl:mb-0 text-center"
        >
          Navigation
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          OceanLink is for Maritime Safety & Surveillance. Made in India. Made
          for the World.
        </motion.h2>

        <StepComponent
          title={maritimeChallenge.title}
          itemsData={maritimeChallenge.stepsItems}
          height={"h-[180px] sm:h-[240px]"}
        />
        <StepComponent
          title={howItWorks.title}
          description={howItWorks.description}
          itemsData={howItWorks.stepsItems}
        />

        <TitleAndSubComponent
          title={ourSolutionOceanLink.title}
          itemsData={ourSolutionOceanLink.stepsItems}
          height={"h-[160px] sm:h-[220px]"}
        />

        <TitleAndSubComponent
          title={technicalComponents.title}
          itemsData={technicalComponents.stepsItems}
          height={"h-[160px] sm:h-[220px]"}
        />

        <StepComponent
          title={coreObjectives.title}
          itemsData={coreObjectives.stepsItems}
        />

        <BubbleContent
          title={systemEnhancementPossibilities.title}
          description={systemEnhancementPossibilities.description}
          contentItems={systemEnhancementPossibilities.stepsItems}
        />
        
        <BubbleContent
          title={extendedInfrastructure.title}
          description={extendedInfrastructure.description}
          contentItems={extendedInfrastructure.stepsItems}
        />
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
