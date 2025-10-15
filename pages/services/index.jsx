import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";
import ParticlesContainer from "../../components/ParticlesContainer";

export const serviceData = [];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center lg:pt-[15rem] md:pt-[16.5rem] sm:pt-[17rem] pt-[12rem]">
      <ParticlesContainer />
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex lg:w-[30vw] flex-col lg:text-left mb-4 lg:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 lg:mt-8 lg:text-4xl text-3xl"
            >
              What We Do <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 lg:text-[14px] text-[12px]"
            >
              We bring ideas to life through immersive technology. Whether it’s
              learning, training, healing, or exploring, our XR experiences
              transform the way people interact with the world around them.
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
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
