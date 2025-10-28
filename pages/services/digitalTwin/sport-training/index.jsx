import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../../../variants";
import Circles from "../../../../components/Circles";
import Bulb from "../../../../components/Bulb";
import BubbleContent from "../../../../components/BubbleContent";

const applicationItems = {
  title: "Benefits of Sports Training via VR",
  contentItems: [
    {
      title: "Design and Prototyping",
    },
    {
      title: "Tactile Training",
    },
    {
      title: "Improved Game Strategy ",
    },
    {
      title: "Improved Reflexes and Reaction",
    },
    {
      title: "Faster Skill Acquisition",
    },
    {
      title: "Cognitive Benefits",
    },
    {
      title: "Visualisation Technique",
    },
    {
      title: "Mental Training and Focus",
    },
    {
      title: "Safe and Injury-Free environment",
    },
    {
      title: "Convenient",
    },
    {
      title: "Repetitive Practice",
    },
    {
      title: "Immersive Game Scenarios",
    },
    {
      title: "Performance Analysis",
    },
    {
      title: "Real-time Tracking",
    },
  ],
};

const athelePerformance = [
  { title: "Mental training " },
  { title: "Visualise specific plays and movements" },
  { title: "Boosting performance and preparedness" },
  { title: "Simulate game scenarios" },
];

const coaching = [
  { title: "Analyse technique and performance" },
  { title: "Key feedback" },
  { title: "Help players improve" },
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
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
        >
          Helps in enhancing performance and improve skills by offering a
          combination of real-time data, virtual coaching and immersive
          experiences to sharpen technique and mental focus. It even prevent
          injures! It is transforming how athletes prepare.
        </motion.h2>

        <BubbleContent
          title={applicationItems.title}
          contentItems={applicationItems.contentItems}
        />

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 lg:mt-8 lg:text-4xl text-3xl text-center"
        >
          <span className=" text-accent">
            {"Real-Time Data Analysis in virtual setting"}
          </span>
        </motion.h2>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 lg:mt-3 lg:text-2xl text-1xl text-center"
        >
          <span className=" text-secondaryAccent">{"Athlete Performance"}</span>
        </motion.h2>
        <BubbleContent contentItems={athelePerformance} />
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 lg:mt-3 lg:text-2xl text-1xl text-center"
        >
          <span className=" text-secondaryAccent">{"Coaching"}</span>
        </motion.h2>
        <BubbleContent contentItems={coaching} />
      </div>

      <Bulb />
    </div>
  );
};

export default SportTraining;
