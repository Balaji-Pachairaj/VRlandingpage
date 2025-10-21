import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../../variants";
import Circles from "../../../components/Circles";
import Bulb from "../../../components/Bulb";
import BubbleContent from "../../../components/BubbleContent";

const applicationItems = [
  {
    title: "Aviation",
  },
  {
    title: "Corporate & Soft Skill Training",
  },
  {
    title: "Retails and Service Industry Training",
  },
  {
    title: "Industrial and Safety Training",
  },
  {
    title: "Flight Simulators",
  },
  {
    title: "Communication and Leadership",
  },
  {
    title: "Product Knowledge",
  },
  {
    title: "Emergency Response",
  },
  {
    title: "Emergency Procedures",
  },
  {
    title: "Customer Service",
  },
  {
    title: "Customer Interaction",
  },
  {
    title: "Equipment Handling",
  },
  {
    title: "Hazard Identification",
  },
];

const VrTraining = () => {
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
          VR Training
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
        >
          Virtual Reality (VR) in Training has become a transformative tool
          across various industries. By simulating realistic environments, VR
          allows individuals to practice skills, scenarios, and tasks in a
          controlled, immersive setting, often enhancing learning outcomes and
          improving safety.
        </motion.h2>

        <BubbleContent title={"Applications"} contentItems={applicationItems} />
      </div>

      <Bulb />
    </div>
  );
};

export default VrTraining;
