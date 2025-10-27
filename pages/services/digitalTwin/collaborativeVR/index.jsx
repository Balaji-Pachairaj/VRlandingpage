import React from "react";
import Circles from "../../../../components/Circles";
import { motion } from "framer-motion";
import Bulb from "../../../../components/Bulb";
import BubbleContent from "../../../../components/BubbleContent";
import { fadeIn } from "../../../../variants";

const keyIots = {
  title: "Key IoTs",
  contentItems: [
    {
      title: "Hardware",
    },
    {
      title: "Input Devices",
    },
    {
      title: "Motion Tracking Sensor",
    },
  ],
};

const software = {
  title: "Software",
  contentItems: [
    {
      title: "Networking Technology",
    },
  ],
};

const applications = {
  title: "Applications",
  contentItems: [
    {
      title: "Remote Learning, Education & Training",
    },
    {
      title: "Medical Training",
    },
  ],
};
const professionalCollaboration = {
  title: "Professional Collaboration",
  contentItems: [
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
  ],
};
const entertainment = {
  title: "Entertainment",
  contentItems: [
    {
      title: "Gaming",
    },
    {
      title: "Virtual Events",
    },
  ],
};

const advantagesOfCollaborativeVR = {
  title: "Advantages of Collaborative VR",
  contentItems: [
    {
      title: "Ai Integrated",
    },
    {
      title: "Enhanced Engagement",
    },
    {
      title: "Global Reach",
    },
    {
      title: "Increased Efficiency",
    },
    {
      title: "Reduced Costs",
    },
  ],
};

const CollaborativeVR = () => {
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
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          Virtual environments where multiple users can interact and collaborate
          in real-time, regardless of their physical location.
        </motion.h2>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          Leveraged to promote teamwork, creativity and communication
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-4xl text-xl font-[600] mb-8 xl:mb-0 text-center mt-8 text-accent"
        >
          How It Works?
        </motion.h2>

        <ul className=" w-full flex flex-col list-disc gap-4">
          <motion.list
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
          >
            Enables users to enter a shared virtual space via head-mounted gears
            or other IoTs Here they can see and interact with one another and
            virtual objects, in real-time
          </motion.list>
          <motion.list
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
          >
            This immersive experience mimics real-world interactions, allowing
            participants to communicate and collaborate as if they were
            physically present togetherime
          </motion.list>
          <motion.list
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
          >
            It is a significant advancement in how people can interact, learn
            and work together by leveraging immersive technology
          </motion.list>
          <motion.list
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" md:text-md text-[14px] mb-8 xl:mb-0 text-start"
          >
            It has the potential to transform collaborative practices across a
            plethora of sectors
          </motion.list>
        </ul>

        <BubbleContent
          title={keyIots.title}
          contentItems={keyIots.contentItems}
        />
        <BubbleContent
          title={software.title}
          contentItems={software.contentItems}
        />
        <BubbleContent
          title={applications.title}
          contentItems={applications.contentItems}
        />
        <BubbleContent
          title={professionalCollaboration.title}
          contentItems={professionalCollaboration.contentItems}
        />
        <BubbleContent
          title={entertainment.title}
          contentItems={entertainment.contentItems}
        />
        <BubbleContent
          title={advantagesOfCollaborativeVR.title}
          contentItems={advantagesOfCollaborativeVR.contentItems}
        />
      </div>

      <Bulb />
    </div>
  );
};

export default CollaborativeVR;
