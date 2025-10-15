import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";
import ParticlesContainer from "../../components/ParticlesContainer";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center lg:pt-[15rem] md:pt-[35rem] pt-[17.5rem]">
      {/* particles */}
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
              className="h2 lg:mt-12 lg:text-4xl text-3xl"
            >
              Other Applications <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 lg:text-[14px] text-[12px]"
            >
              Explore our Other Applications — from Sports Training that
              enhances performance, to Collaborative VR connecting teams, Real
              Estate visualization transforming property tours, and VR Training
              empowering learners through immersive, realistic simulations for
              every industry.
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
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
