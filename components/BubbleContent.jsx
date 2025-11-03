import { motion } from "framer-motion";
import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { fadeIn } from "../variants";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const BubbleContent = ({
  title = null,
  description = null,
  contentItems = [],
  size = 175,
}) => {
  return (
    <div className=" mx-auto py-6 w-full flex flex-col items-center gap-6">
      {title && (
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 lg:mt-8 lg:text-4xl text-3xl"
        >
          <span className=" text-accent">{title}</span>
        </motion.h2>
      )}

      {description && (
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-4  lg:text-[14px] text-[12px] text-center"
        >
          {description}
        </motion.p>
      )}

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
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          freeMode
          className="h-[240px] "
        >
          {contentItems.map((item, i) => (
            <SwiperSlide key={i} className="flex flex-row items-center">
              <div
                href={item.link || "/"}
                target="_blank"
                rel="noreferrer noopener"
                className={`bg-[rgba(65,47,123,0.45)] w-[175px] h-[175px] rounded-[50%] hover:bg-accent hover:bg-opacity-40 px-6  pt-8 pb-4 flex flex-col items-center justify-center group cursor-pointer  transition-all duration-300 border-secondaryAccent border`}
              >
                {/* title & description */}
                <div className="">
                  <div className="mb-2 text-[15px] text-center font-bold">
                    {item.title}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default BubbleContent;
