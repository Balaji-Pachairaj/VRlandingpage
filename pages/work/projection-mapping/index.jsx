import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../../variants";
import Circles from "../../../components/Circles";
import Bulb from "../../../components/Bulb";
import BubbleContent from "../../../components/BubbleContent";

const applicationItems = [
  {
    title: "Creative Projects",
  },
  {
    title: "Immersive Experience",
  },
  {
    title: "Surface Mapping",
  },
  {
    title: "Public Installations",
  },
  {
    title: "Adverts",
  },
  {
    title: "Theatre & Concerts",
  },
  {
    title: "Art Installations",
  },
  {
    title: "Product Launch",
  },
  {
    title: "Museums",
  },
];
const index = () => {
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
          Projection Mapping
          <br></br>
          <span className="md:text-[14px] text-[12px] text-accent">
            <span className=" text-white">(or)</span> {"  "}
            Spatial Augmented Reality or Video Mapping
          </span>
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
        >
          A technology that allows for visual artistry through projection of
          images and videos onto building facades, roads or any surface to
          create immersive, visual and virtual experiences It offers a versatile
          and impactful platform for creative expression, storytelling and
          immersive experiences across a wide range of applications
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
        >
          Innovate in the realms of entertainment, advertising and experiential
          design
        </motion.h2>

        <BubbleContent title={"Applications"} contentItems={applicationItems} />
      </div>

      <Bulb />
    </div>
  );
};

export default index;
