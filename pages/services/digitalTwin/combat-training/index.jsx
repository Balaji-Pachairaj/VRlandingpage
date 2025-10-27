import { motion } from "framer-motion";
import Circles from "../../../../components/Circles";
import { fadeIn } from "../../../../variants";
import Bulb from "../../../../components/Bulb";
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
import BubbleContent from "../../../../components/BubbleContent";

//   title: "",
//   contentItems: [
//     {
//       title: "",
//     },
//   ],

const itHelpsInItems = {
  title: "It helps in",
  contentItems: [
    {
      title: "Honing various skills",
    },
    {
      title: "Hand-to-hand combat",
    },
    {
      title: "Other complex military operations",
    },
    {
      title: "Strategic decision-making in tactical situations",
    },
  ],
};

const vrTrainingWithRealLifeCombat = {
  title: "VR training with real-life combat allows for a highly",
  contentItems: [
    {
      title: "Immersive",
    },
    {
      title: "Simulated",
    },
    {
      title: "Controlled",
    },
    {
      title: "Safe environment",
    },
    {
      title: "Risk-free operation",
    },
  ],
};

const advantagesOfVrTraining = {
  title: "Advantage of VR training",
  contentItems: [
    {
      title: "Sbility to offer repetition",
    },
    {
      title: "Multiple Simulated Scenario",
    },
    {
      title: "Test different strategies",
    },
    {
      title: "Assess your responses",
    },
    {
      title: "Zero logistical constraints",
    },
    {
      title: "All in real time",
    },
  ],
};

const applications = {
  title: "Applications",
  contentItems: [
    {
      title: "Hand-to-Hand Combat",
    },
    {
      title: "Self-Defence",
    },
    {
      title: "Stress Management",
    },
    {
      title: "Weapons Training",
    },
    {
      title: "Situational Awareness",
    },
    {
      title: "Individual and Team Training",
    },
    {
      title: "Military and Law Enforcement",
    },
    {
      title: "Physical and Mental Conditioning",
    },
    {
      title: "Realistic Combat Simulations",
    },
  ],
};

const usedCases = {
  title: "Used case scenarios",
  contentItems: [
    {
      title: "Hand-to-hand combat",
    },
    {
      title: "Guerrilla tactics",
    },
    {
      title: "First responders to nature’s disasters",
    },
    {
      title: "Simulated environments for tackle terror attack training",
    },
    {
      title: "Learn to coup de grâce, raid and counterattack",
    },
    {
      title:
        "Ammunitions, artillery, grenade, tank, rockets and Kalashnikovs training",
    },
  ],
};

const advantagesOfVrCombatTraining = {
  title: "Advantages of VR Combat Training",
  contentItems: [
    {
      title: "Cost Effective",
    },
    {
      title: "Easy Scalability",
    },
    {
      title: "Real-time Feedback",
    },
    {
      title: "Safe Environment",
    },
    {
      title: "Equipment Familiarisation",
    },
    {
      title: "Crisis Management Adaptability",
    },
  ],
};

const CombatTraining = () => {
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
          Combat Training
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          Combat training with VR is becoming increasingly popular and effective
          method for military personnels.
        </motion.h2>

        <BubbleContent
          title={itHelpsInItems.title}
          contentItems={itHelpsInItems.contentItems}
        />
        <BubbleContent
          title={vrTrainingWithRealLifeCombat.title}
          contentItems={vrTrainingWithRealLifeCombat.contentItems}
        />
        <BubbleContent
          title={advantagesOfVrTraining.title}
          contentItems={advantagesOfVrTraining.contentItems}
        />
        <BubbleContent
          title={applications.title}
          contentItems={applications.contentItems}
        />

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-[20px] text-[14px] mb-8 xl:mb-0 text-center"
        >
          <span className=" text-accent font-bold">AgniJosh,</span> a Trishul
          Medutainment’s brainchild, is a combat training platform which is
          currently under construction.
        </motion.h2>

        <BubbleContent
          title={usedCases.title}
          contentItems={usedCases.contentItems}
          size={200}
        />
        <BubbleContent
          title={advantagesOfVrCombatTraining.title}
          contentItems={advantagesOfVrCombatTraining.contentItems}
        />
      </div>

      <Bulb />
    </div>
  );
};

export default CombatTraining;
