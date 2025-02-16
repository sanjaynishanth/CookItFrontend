import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-6 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10" id="about">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-center mx-auto"
        >
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-3xl">
            Who are we
          </h1>
          <span className="relative inline-flex sm:inline block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
            <span className="relative"> About Us</span>
          </span>
        </motion.div>
        {/* End Title */}

        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start justify-around">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 max-w-lg text-center lg:text-left"
          >
            <p className="text-lg text-gray-600 mb-8 about-text font-[Inter]">
              At <strong>CookIT</strong>, we help businesses grow digitally. In
              today's fast-paced world, a strong online presence is essential—we
              make it happen!
            </p>
            <p className="text-lg text-gray-600 mb-4 font-[Inter]">
              From digital marketing to website development, social media
              management, and content creation, we offer tailored solutions to
              boost visibility, attract customers, and drive engagement.
            </p>
            {/* Buttons */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-x-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white hover:shadow-lg transition duration-200 text-sm font-medium rounded-full py-3 px-5"
                href="/contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                Book a Call
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center lg:justify-end"
          >
            <img
              src="Team work.gif"
              alt="About Us"
              className="w-full max-w-sm h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
