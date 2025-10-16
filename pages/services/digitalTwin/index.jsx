import { motion } from "framer-motion";

import Bulb from "../../../components/Bulb";
import Circles from "../../../components/Circles";
import ServiceSlider from "../../../components/ServiceSlider";
import { fadeIn } from "../../../variants";
import { GiTwoCoins } from "react-icons/gi";
import ParticlesContainer from "../../../components/ParticlesContainer";
import { GiWarlockEye } from "react-icons/gi";
import { PiMonitorPlayFill } from "react-icons/pi";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";
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
import { BsGrid, BsHeadsetVr } from "react-icons/bs";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiSewingMachine } from "react-icons/gi";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { HiMiniPuzzlePiece } from "react-icons/hi2";
import { FaListUl } from "react-icons/fa";
import Avatar from "../../../components/Avatar";
import CountUp from "react-countup";

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

const applicationsItems = [
  {
    Icon: FaIndustry,
    iconColor: "#0077FF",
    title: "Industrial Surveillance",
  },
  {
    Icon: FaGasPump,
    iconColor: "#E91E63",
    title: "Oil and Gas Industry",
  },
  {
    Icon: FaCogs,
    iconColor: "#9C27B0",
    title: "Design and Prototyping",
  },
  {
    Icon: FaCar,
    iconColor: "#03A9F4",
    title: "Automotive Industry",
  },
  {
    Icon: FaCity,
    iconColor: "#9C27B0",
    title: "Smart Cities and Urban Planning",
  },
  {
    Icon: FaShieldAlt,
    iconColor: "#2196F3",
    title: "Site Safety",
  },
  {
    Icon: FaUserGraduate,
    iconColor: "#E91E63",
    title: "Training and Education",
  },
  {
    Icon: FaTools,
    iconColor: "#9C27B0",
    title: "Maintenance and Support",
  },
];
const Services = () => {
  return (
    <div className="h-full bg-primary/30  flex items-center lg:pt-[10rem] md:pt-[16.5rem] sm:pt-[17rem] pt-[14rem]  overflow-auto overflow-x-hidden">
      <ParticlesContainer />
      <Circles />
      <div className="pb-24 md:pb-0 container mx-auto h-full flex flex-col justify-start md:gap-[1rem] gap-[0.5rem]">
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

        <div className=" mx-auto py-12 w-full flex flex-col items-center gap-6">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 lg:mt-8 lg:text-4xl text-3xl"
          >
            <span className=" text-secondaryAccent">Applications</span>
          </motion.h2>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full lg:w-[90%]"
          >
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                820: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                  centeredSlides: true,
                  centeredSlidesBounds: true,
                },
                1080: {
                  slidesPerView: 6,
                  spaceBetween: 15,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              freeMode
              className="h-[200px]"
            >
              {applicationsItems.map((item, i) => (
                <SwiperSlide key={i} className="flex flex-row items-center">
                  <Link
                    href={item.link || "/"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-[rgba(65,47,123,0.45)] w-[150px] h-[150px] rounded-[50%] h  px-6  pt-8 pb-4 flex flex-col items-center justify-center group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 border-secondaryAccent border"
                  >
                    {/* icon */}
                    <div className="text-4xl text-accent mb-4 w-full flex flex-row justify-center">
                      <item.Icon color={item.iconColor} aria-hidden size={24} />
                    </div>

                    {/* title & description */}
                    <div className="mb-8">
                      <div className="mb-2 text-[12px] text-center">
                        {item.title}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

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

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 pb-24">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center gap-12">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 lg:text-[32px] text-[22px]"
            >
              <br></br>
              <span className="text-accent"> Benefits of </span>
              Integrating Digital Twins
            </motion.h2>

            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 gag-[1rem]">
                  <div className="text-2xl xl:text-4xl font-extrabold text-secondaryAccent mb-2">
                    <GiWarlockEye size={48} color={"#2C3F9E"} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Enhanced Visualisation
                  </div>
                </div>

                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-secondaryAccent mb-2">
                    <FaPeopleGroup size={48} color="#6A3E91" />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Improved Collaboration
                  </div>
                </div>

                {/* projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-secondaryAccent mb-2">
                    <PiMonitorPlayFill size={48} color="#C52D8D" />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Real-time Monitoring
                  </div>
                </div>

                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-secondaryAccent mb-2">
                    <GiTwoCoins size={48} color="#6A3E91" />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Cost-Efficient Testing
                  </div>
                </div>

                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-secondaryAccent mb-2">
                    <GiSewingMachine size={48} color="#6A3E91" />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Combining AI
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
