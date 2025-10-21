import { motion } from "framer-motion";
import Circles from "../../../components/Circles";
import { fadeIn } from "../../../variants";
import Bulb from "../../../components/Bulb";
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
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BubbleContent from "../../../components/BubbleContent";

const keyIoTsItems = [
  {
    title: "Hardware",
  },
  {
    title: "Input Devices",
  },
  {
    title: "Motion Tracking Sensor",
  },
];

const softwareItems = [
  {
    title: "Networking Technology",
  },
];

const applicationsItem = [
  {
    title: "Remote Learning, Education & Training",
  },
  {
    title: "Medical Training",
  },
];

const professionalCollaborationItems = [
  {
    title: "Architectural Visualisation",
  },
  {
    title: "Design and Prototyping",
  },
  {
    title: "Interior Design Visualisation",
  },
  {
    title: "Board Meetings and AGMS",
  },
];

const entertainmentItems = [
  {
    title: "Gaming",
  },
  {
    title: "Virtual Events",
  },
];

const CollaborativeVr = () => {
  return (
    <div className=" w-full h-full bg-primary/30  flex items-center lg:pt-[10rem] md:pt-[16.5rem] sm:pt-[17rem] pt-[14rem]  overflow-auto overflow-x-hidden ">
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
          Collaborative VR
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
        >
          Collaborative Virtual Reality of CVR refers to virtual environments
          where multiple users can interact and collaborate in real-time,
          regardless of their physical location. This technology can b leveraged
          to promote teamwork, creativity and communication.
        </motion.h2>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
        >
          CVR enables users to enter a shared virtual space via head-mounted
          gears or other IoTs, where they can see and interact with one another,
          as well as with virtual objects, in real-time. This immersive
          experience mimics real-world interactions, allowing participants to
          communicate and collaborate as if they were physically present
          together.
        </motion.h2>

        <BubbleContent title={"Key IoTs"} contentItems={keyIoTsItems} />
        <BubbleContent title={"Software"} contentItems={softwareItems} />
        <BubbleContent title={"Applications"} contentItems={applicationsItem} />
        <BubbleContent
          title={"Professional Collaboration"}
          contentItems={professionalCollaborationItems}
        />
        <BubbleContent
          title={"Entertainment"}
          contentItems={entertainmentItems}
        />
      </div>

      <Bulb />
    </div>
  );
};

export default CollaborativeVr;
