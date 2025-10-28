import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../variants";

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
        className={`w-full lg:w-[90%] grid ${
          contentItems.length >= 5
            ? "xl:grid-cols-5"
            : `xl:grid-cols-${contentItems?.length}`
        } ${
          contentItems.length >= 4
            ? "lg:grid-cols-4"
            : `lg:grid-cols-${contentItems?.length}`
        }  ${
          contentItems.length >= 3
            ? "md:grid-cols-3"
            : `md:grid-cols-${contentItems?.length}`
        }  ${
          contentItems.length >= 2
            ? "grid-cols-2"
            : `grid-cols-${contentItems?.length}`
        }    justify-center  gap-8 mb-12`}
      >
        {contentItems.map((item, i) => (
          <div className=" w-full h-full flex flex-row justify-center items-center">
            <div
              key={i}
              className={`flex flex-row items-center h-[200px] ${
                i % 2 === 0 ? "mt-0" : "mt-8"
              }`}
            >
              <div
                href={item.link || "/"}
                target="_blank"
                rel="noreferrer noopener"
                className={`  ${
                  i % 3 === 0 ? "bg-[#0A3457] border-secondaryAccent" : ""
                } ${i % 3 === 1 ? "bg-[#371366] border-[#4B1C5B]" : ""}  ${
                  i % 3 === 2 ? "bg-[#6F0F5B] border-[#570F3F]" : ""
                }  w-[175px] h-[175px] rounded-[50%] h  px-6  pt-8 pb-4 flex flex-col items-center justify-center group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 border-[5px] `}
              >
                {/* title & description */}
                <div className="">
                  <div className="mb-2 text-[15px] text-center font-bold">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BubbleContent;
