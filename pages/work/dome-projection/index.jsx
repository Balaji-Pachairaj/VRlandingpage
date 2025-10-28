import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../../variants";
import Circles from "../../../components/Circles";
import Bulb from "../../../components/Bulb";
import BubbleContent from "../../../components/BubbleContent"

//   title: "",
//   contentItems: [
//     {
//       title: "",
//     },
//   ],
const technicalsAspects = {
  title: "Technical Aspects",
  contentItems: [
    {
      title: "Dome-shaped structure",
    },
    {
      title: "Projection Technology",
    },
    {
      title: "Content",
    },
    {
      title: "Interactive Features",
    },
  ],
};

const applications = {
  title: "Applications",
  contentItems: [
    {
      title: "Education",
    },
    {
      title: "Entertainment",
    },
    {
      title: "Theme Parks",
    },
    {
      title: "Art Installations",
    },
  ],
};

const benefitsOfDomeProjection = {
  title: "Benefits of Dome Projection",
  contentItems: [
    {
      title: "Interactive Content",
    },
    {
      title: "Collaborative Experience",
    },
    {
      title: "Immersive",
    },
    {
      title: "3D Animations",
    },
    {
      title: "Enhanced Engagement",
    },
  ],
};

const DomeProjections = () => {
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
          Dome Projection
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          Ability to envelop audiences in a visually stimulating environment
          makes it a valuable and unique medium
        </motion.h2>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          A compelling and immersive way to engage with content
        </motion.h2>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          A key tool in modern day for storytelling, learning and artistic
          expression
        </motion.h2>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          Capitalises on the immersive potential of 360-degree visuals
        </motion.h2>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          Offer unique experiences
        </motion.h2>

        <BubbleContent
          title={technicalsAspects.title}
          contentItems={technicalsAspects.contentItems}
        />
        <BubbleContent
          title={applications.title}
          contentItems={applications.contentItems}
        />
        <BubbleContent
          title={benefitsOfDomeProjection.title}
          contentItems={benefitsOfDomeProjection.contentItems}
        />
      </div>

      <Bulb />
    </div>
  );
};

export default DomeProjections;
