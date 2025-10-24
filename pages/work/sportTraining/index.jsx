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

const applicationsItems = [
  {
    title: "Technique Refinement",
  },
  {
    title: "Improved Game Strategy",
  },
  {
    title: "Tactile Training",
  },
  {
    title: "Faster Skill Acquisition",
  },
  {
    title: "Immersive Game Scenarios",
  },
  {
    title: "Real-time Tracking",
  },
  {
    title: "Improved Reflexes and Reaction",
  },
  {
    title: "Cognitive Benefits",
  },
  {
    title: "Performance Analysis",
  },
  {
    title: "Injury Prevention and Recovery",
  },
  {
    title: "Visualisation Technique",
  },
  {
    title: "Mental Training and Focus",
  },
  {
    title: "Repetitive Practice",
  },
  {
    title: "Safe and Controlled Environment",
  },
  {
    title: "Convenient",
  },
];

const SportTraining = () => {
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
          Sports Training
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[12px] mb-8 xl:mb-0 text-center"
        >
          Sport training with VR is gaining momentum as a way to enhance
          performance, improve skills, and even prevent injuries. It’s
          transforming how athletes prepare, offering a combination of real-time
          data, immersive experiences, and virtual coaching to sharpen technique
          and mental focus
        </motion.h2>

        <BubbleContent
          title={"Benefits of Sports Training via VR Technique"}
          contentItems={applicationsItems}
        />

        {/* ------------------------- */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-2xl text-xl font-[600] mb-8 xl:mb-0 text-start" 
        >
          <span className="text-accent">Real-Time Data Analysis</span>
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start pb-36"
        >
          Athlete Performance: VR can be used for mental training, allowing
          athletes to simulate game scenarios or visualise specific plays and
          movements, boosting performance and mental preparedness. 2. Coaching:
          Coaches can use VR to analyse an athlete’s technique and performance
          in a virtual setting, providing valuable feedback and helping players
          improve faster.
        </motion.h2>
      </div>

      <Bulb />
    </div>
  );
};

export default SportTraining;
