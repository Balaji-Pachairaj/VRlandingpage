import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../../../variants";
import Circles from "../../../../components/Circles";
import Bulb from "../../../../components/Bulb";
import BubbleContent from "../../../../components/BubbleContent";
import StepComponent from "../../../../components/StepComponent";
import { FreeMode, Pagination } from "swiper";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

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

const howItworks = {
  title: "How It Works?",
  stepsItems: [
    {
      title: "Pre- surgery and post-surgery procedures",
      description: "",
    },
    {
      title:
        "Gives a High-Definition, three dimensional, immersive view of the patient’s anatomy for clear spatial awareness",
      description: "",
    },
    {
      title: "High-precision robots",
      description: "",
    },
    {
      title:
        "Minimal invasion Robotic Systems controlled by the surgeon via a console ",
      description: "",
    },
    {
      title: "Helping in faster recovery and lesser pain for the patient",
      description: "",
    },
    {
      title: "Real-Time Visualisation with real-time data from robotic systems",
      description: "",
    },
    {
      title:
        "Surgeon can track instruments and monitor the procedure from multiple angles",
      description: "",
    },
    {
      title:
        "Robotic Surgery. – Better Training - Enhanced Precision - Minimally invasive – Remote Surgery",
      description: "",
    },
  ],
};

const Index = () => {
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
          Healthcare, Therapy & Robotic Surgery
          <br></br>
          <span className="md:text-[14px] text-[12px] text-accent">
            VR has been successfully adopted to perform surgeries.
          </span>
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[14px] mb-8 xl:mb-0 text-center"
        >
          Prospective clients can view their future home aided by
          three-dimensional realistic design visualisation with immersive and
          interactive properties that allows space for customisation when it
          comes to architectural & interior design as well as other soft
          furnishings.
          <br></br>
          <br></br>
          <br></br>
          AI uses the patient’s medical history and current geographic situation
          to predict present health patterns and diseases and future risks too.
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-3xl text-xl font-[600] mb-8 xl:mb-0 text-center mt-32 text-accent"
        >
          Remote Patient Monitoring
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-sm text-[12px] mb-8 xl:mb-0 text-start first-letter:ml-[20%]"
        >
          helps monitor and detect any abnormal activity and alert the nurse or
          doctor for early prevention or cure. It also tracks vacant beds in ER,
          making the process more seamless.
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-3xl text-xl font-[600] mb-8 xl:mb-0 text-center mt-32 text-accent"
        >
          In mental health
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-sm text-[12px] mb-8 xl:mb-0 text-start first-letter:ml-[20%]"
        >
          and therapeutic practices, immersing patients in simulated and
          stimulated environments facilitates therapists for therapy, skill
          training and relaxation techniques, enhancing traditional therapeutic
          approaches. It helps cure mental health situations such as anxiety,
          ADHD, depression, claustrophobia and substance addiction. Research and
          study across the medical field has proven that with the use of VR
          there is nearly 40% improvement in the mental health of the patients.
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-3xl text-xl font-[600] mb-8 xl:mb-0 text-center mt-32 text-accent"
        >
          Robotic surgery
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-sm text-[12px] mb-8 xl:mb-0 text-start first-letter:ml-[20%]"
        >
          is lauded for the precision and minimum invasive and faster patient
          recover, post-surgery.
        </motion.h2>
        <div className=" w-full flex flex-col gap-x-8 mt-[2rem]">
          {/* text */}
          <div className="w-full text-center flex flex-col mb-4 lg:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 lg:mt-8 lg:text-4xl text-3xl text-center"
            >
              <span className="text-accent">{howItworks.title}</span>
            </motion.h2>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <div className="max-w-[1200px] w-full grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 justify-center mx-auto gap-8">
              {howItworks.stepsItems.map((item, i) => (
                <SwiperSlide key={i}>
                  <Link
                    href={item.link || "/"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-[rgba(65,47,123,0.15)] max-w-[300px]  jus sm:h-[90%] h-[88%] h rounded-lg px-6  pt-8 pb-4 flex flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
                  >
                    {/* icon */}
                    <div className="md:text-4xl text-3xl text-white mb-4">
                      {i + 1}
                      {")"}
                    </div>

                    {/* title & description */}
                    <div className="mb-8">
                      <div className="mb-2 md:text-[14px] text-[12px]">
                        {item.title}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Index;
