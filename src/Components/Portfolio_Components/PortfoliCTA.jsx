// src/components/PortfolioCTA.jsx
import React from "react";
import { motion } from "framer-motion";

const PortfolioCTA = () => {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Animated Glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-20 w-96 h-96 bg-gray-50 opacity-25 blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gray-50 opacity-20 blur-3xl rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Let’s Create Something <br />
          <span className="relative inline-block text-blue-600 pb-3">
            Beautiful Together
            {/* Animated underline */}
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute left-0 bottom-0 h-[3px] bg-blue-500 rounded-full"
            />
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          At <span className="font-semibold text-blue-600">CookInfo</span>, we
          design and deliver digital experiences that tell stories — blending
          innovation, design, and strategy.
        </motion.p>

        {/* Button (Glassy Effect) */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="inline-flex items-center justify-center backdrop-blur-md bg-white/30 text-blue-700 border border-blue-300 font-semibold text-lg py-3 px-10 rounded-full shadow-lg hover:bg-white/60 hover:shadow-2xl transition-all duration-300"
        >
          Let's Connect →
        </motion.a>
      </div>
    </section>
  );
};

export default PortfolioCTA;
