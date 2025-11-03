import { motion } from "framer-motion";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] items-center xl:items-center">
          {/* Heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center xl:text-left mb-8"
          >
            Let's <span className="text-accent">Connect</span>
          </motion.h2>

          {/* Professional Message */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-lg md:text-xl text-white/80 mb-10 text-center xl:text-left leading-relaxed max-w-[600px]"
          >
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            using the contact details below.
          </motion.p>

          {/* Contact Details */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 text-xl md:text-2xl font-medium text-white"
          >
            <div className="flex items-center gap-4 justify-center xl:justify-start">
              <BsTelephone className="text-accent text-3xl" />
              <a
                href="tel:+919876543210"
                className="hover:text-accent transition-colors duration-300"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center xl:justify-start">
              <BsEnvelope className="text-accent text-3xl" />
              <a
                href="mailto:contact@example.com"
                className="hover:text-accent transition-colors duration-300"
              >
                contact@example.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
