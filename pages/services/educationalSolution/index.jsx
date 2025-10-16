import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaListUl,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../../components/Avatar";
import Circles from "../../../components/Circles";
import { fadeIn } from "../../../variants";
import ParticlesContainer from "../../../components/ParticlesContainer";
import { BsGrid, BsHeadsetVr } from "react-icons/bs";
import { HiMiniPuzzlePiece } from "react-icons/hi2";

//  data
export const aboutData = [
//   {
//     title: "Why Us",
//     info: [
//       {
//         para: [
//           "Trishul Medutainment Pvt Ltd stands out as a pioneer in AR, VR and AI driven solutions, seamlessly blending digital and physical realities to revolutionise industries. With a leadership team boasting of 45+years of expertise, we deliver cutting-edge, customised solutions across healthcare, education, tourism, navigation, security and defence.",
//           "Our commitment to innovation, precision and user-centric design ensures immersive, high-impact experiences. We leverage our capabilities of digital twinning, Innovation and Advanced IoT development, powered by AI-technology. These key ingredients help build robust, scalable, cost-efficient, future-ready solutions across various industries and sectors, which is aimed at Enhanced Training, Operations and Engagement.",
//           "Choosing us means, partnering with a tech-driven company dedicated to transforming industries and unlocking limitless possibilities for the future. ",
//         ],
//       },
//     ],
//   },

//   {
//     title: "Our Mission",
//     info: [
//       {
//         para: [
//           "To develop cutting-edge immersive and AI-driven solutions across healthcare, education, navigation, security, defense, tourism and other industrial sectors, hence empowering organisation.",
//         ],
//       },
//     ],
//   },
  {
    title: "Immerge Lab is",
    info: [
      {
        title: "Driven by Educators Designers Subject matter experts",
        icons: [BsHeadsetVr],
        iconsColor: ["#0774BA"],
      },
      {
        title:
          "An emergent, immersive technology powered by Augmented Reality Virtual Reality and Artificial Intelligence",
        icons: [HiMiniPuzzlePiece],
        iconsColor: ["#6F2F90"],
      },
      {
        title:
          "An emergent, immersive technology powered by Augmented Reality Virtual Reality and Artificial Intelligence",
        icons: [BsGrid],
        iconsColor: ["#D7128C"],
      },
      {
        title: "Built to achieve enhanced levels of engagement and retention",
        icons: [FaListUl],
        iconsColor: ["#0774BA"],
      },
    ],
  },
    {
    title: "About ImmergeLab",
    info: [
      {
        para: [
          "From the study of atoms to the human body to botanical  and zoological dissections to exploring the cosmos & ocean life to taking 360° tours of historical spots and events! All while being able to interact with 3-D virtual objects.",
          "ImmergeLab Provides complete system solutions: Hardware ——> Software ——> Content ——> Services",
          "VR has headsets with intuitive handheld controllers that allow interactivity to explore and learn, for a brilliant immersive experience. The VR headsets are stand alone IoTs, allowing for seamless movement and endless freedom! Troubleshooting services can be provided, if required, for uninterrupted and unparalleled adventure.",
        ],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left  xl:pt-[15rem] lg:pt-[8rem] pt-[12.5rem] overflow-auto">
      {/* particles */}
      <ParticlesContainer />
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 lg:text-[32px] text-[22px]"
          >
            Educational <br></br>
            <span className="text-accent"> Solution </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 lg:text-md text-sm text-white"
          >
            VR in education has helped increase retention amongst learners by
            80% from a single VR session, as opposed to 20% retention level from
            pedagogic method.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 lg:text-md text-sm text-white"
          >
            AR and VR has played a key role in enhancing learner-instructor
            interaction while improving focus. <br></br> VR aides in enhanced
            creative and cognitive thinking abilities, improved imagination in a
            wider gamut of peer-to-peer interactions by cuttisng across borders
            and time zones.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 lg:text-md text-sm text-white"
          >
            Trishul Medutainment is dedicated to building robust
            learner-instructor experiences which are concept-oriented with
            real-life examples on Immerge Lab.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={45} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div> */}

              {/* clients */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Industry Work With.
                </div>
              </div> */}

              {/* projects */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={200} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects worked
                </div>
              </div> */}

              {/* awards */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-auto">
            {aboutData[index].info.map((item, itemI) => (
              <>
                <div
                  key={itemI}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-start text-white/60"
                >
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon color={item.iconsColor[iconI]} />
                      </div>
                    ))}
                  </div>

                  {/* title */}
                  {item.title && (
                    <>
                      <div className="hidden md:flex">-</div>
                      <div className="font-light mb-2 md:mb-0 text-white">
                        {item.title}
                      </div>
                    </>
                  )}

                  {item.stage && <div>{item.stage}</div>}
                </div>
                {item.para &&
                  item.para.map((p) => (
                    <p className="font-light mb-2 md:mb-0 m-0 text-[13px] text-white">
                      {p}
                    </p>
                  ))}
              </>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
