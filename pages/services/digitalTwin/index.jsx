import { motion } from "framer-motion";

import Bulb from "../../../components/Bulb";
import Circles from "../../../components/Circles";
import ServiceSlider from "../../../components/ServiceSlider";
import { fadeIn } from "../../../variants";
import ParticlesContainer from "../../../components/ParticlesContainer";
import Link from "next/link";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { BsGrid, BsHeadsetVr } from "react-icons/bs";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { HiMiniPuzzlePiece } from "react-icons/hi2";
import { FaListUl } from "react-icons/fa";

const serviceData = [
  {
    Icon: BsHeadsetVr,
    iconColor: "#0774BA",
    title: "A Virtual Model",
    description:
      "That digitally mirrors the physical entity and updates in real-time",
    link: "/services/digitalTwin",
  },
  {
    Icon: HiMiniPuzzlePiece,
    iconColor: "#6F2F90",
    title: "Physical Entities",
    description:
      "Physical Entities are digitally twinned. Real-world objects or collaterals such as machinery, buildings, objects and even people!",
  },
  {
    Icon: BsGrid,
    iconColor: "#D7128C",
    title: "Tools & Algorithms",
    description:
      "Tools and algorithms process data to derive analytical insights, to predict performance and simulate behaviour.",
  },
  {
    Icon: FaListUl,
    iconColor: "#0774BA",
    title: "Continuous Data",
    description:
      "Continuous data stream are fed from sensors & IoTs that provide real-time updates about the physical counterpart",
  },
];
const Services = () => {
  return (
    <div className="h-full bg-primary/30  flex items-center lg:pt-[10rem] md:pt-[16.5rem] sm:pt-[17rem] pt-[12rem]">
      <ParticlesContainer />
      <Circles />
      <div className="pb-36 md:pb-0 container mx-auto h-full flex flex-col justify-start md:gap-[1rem] gap-[0.5rem] overflow-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-5xl text-2xl font-[600] mb-8 xl:mb-0 text-center"
        >
          DIGITAL <span className="text-accent">TWIN</span>
        </motion.h2>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" md:text-md text-[12px] mb-8 xl:mb-0 text-center"
        >
          A digital twin is a virtual representation of a physical object,
          system, or process, designed to simulate its real-world counterpart.
          When integrated with virtual reality, digital twins enable immersive
          experiences where users can interact with and analyse these
          simulations in a 3D environment.
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-x-8 mt-[2rem]">
          {/* text */}
          <div className="text-center flex lg:w-[30vw] flex-col lg:text-left mb-4 lg:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 lg:mt-8 lg:text-4xl text-3xl"
            >
              <span className="text-accent">Key Components</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 lg:text-[14px] text-[12px]"
            >
              a Virtual Model that mirrors real-world entities in real time,
              Physical Entities that represent actual assets or people, Tools &
              Algorithms that analyze data to predict performance and simulate
              behavior, and Continuous Data streams.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:max-w-[65%]"
          >
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              freeMode
              className="h-[240px] sm:h-[340px]"
            >
              {serviceData.map((item, i) => (
                <SwiperSlide key={i}>
                  <Link
                    href={item.link || "/"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-[rgba(65,47,123,0.15)] h-[90%] h rounded-lg px-6  pt-8 pb-4 flex flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
                  >
                    {/* icon */}
                    <div className="text-4xl text-accent mb-4">
                      <item.Icon color={item.iconColor} aria-hidden />
                    </div>

                    {/* title & description */}
                    <div className="mb-8">
                      <div className="mb-2 text-md">{item.title}</div>
                    </div>

                    <div className=" sm:block text-[12px] text-white/60 mb-8">
                      {item.description}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
