import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../../variants";
import Circles from "../../../components/Circles";
import Bulb from "../../../components/Bulb";
import BubbleContent from "../../../components/BubbleContent";

const applicationItems = [
  {
    title: "Design and Prototyping",
  },
  {
    title: "Construction Site Safety",
  },
  {
    title: "Smart Cities and Urban Planning",
  },
  {
    title: "Virtual Walkthroughs",
  },
];

const RealEstate = () => {
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
          Real Estate, Architecture, Interiors & Landscapes
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
        >
          Prospective clients can view their future home aided by
          three-dimensional realistic design visualisation with immersive and
          interactive properties that allows space for customisation when it
          comes to architectural & interior design as well as other soft
          furnishings.
        </motion.h2>

        <BubbleContent title={"Applications"} contentItems={applicationItems} />
      </div>

      <Bulb />
    </div>
  );
};

export default RealEstate;
