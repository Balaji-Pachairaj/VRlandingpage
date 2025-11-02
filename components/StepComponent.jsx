import { motion, steps } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fadeIn } from "../variants";

const StepComponent = ({
  title = "",
  description = "",
  itemsData = [
    {
      title: "A Virtual Model",
      description:
        "That digitally mirrors the physical entity and updates in real-time",
    },
  ],
  height = "h-[240px] sm:h-[340px]",
  stepIndex = null,
}) => {
  return (
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
          <span className="text-accent">{title}</span>
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-4  lg:text-[14px] text-[12px] text-center"
        >
          {description}
        </motion.p>
      </div>

      {/* slider */}
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full"
      >
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: itemsData.length >= 3 ? 3 : itemsData.length,
              spaceBetween: 15,
            },
            780: {
              slidesPerView: itemsData.length >= 4 ? 4 : itemsData.length,
              spaceBetween: 15,
            },
            980: {
              slidesPerView: itemsData.length >= 5 ? 5 : itemsData.length,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          freeMode
          className={`${height} flex flex-row justify-center`}
        >
          {itemsData.map((item, i) => (
            <SwiperSlide key={i}>
              <Link
                href={item.link || "/"}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-[rgba(65,47,123,0.15)]  sm:h-[90%] h-[88%] h rounded-lg px-6  pt-8 pb-4 flex flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
              >
                {stepIndex && (
                  <div className="text-4xl text-white mb-4">
                    {i + 1}
                    {")"}
                  </div>
                )}
                {item.icon && (
                  <div className="text-4xl text-white mb-4">
                    <item.icon />
                  </div>
                )}

                {/* title & description */}
                <div className="mb-8">
                  <div className="mb-2 text-[14px]">{item.title}</div>
                </div>

                <div className=" text-[12px] text-white/60 mb-8">
                  {item.description}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default StepComponent;
