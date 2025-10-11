import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const featuredShowreelItem = {
  title: 'Empowering Freelancers Seamlessly',
  thumbnail: 'https://iili.io/Firbidu.png',
  description: 'Don’t guess. Watch and get going in 2 minutes.',
  vimeoId: '1108083630',
};

const Showreel = () => {
  const ref = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '100px']);

  

  return (
    <section ref={ref} id='showreel' className="bg-gray-50 py-15 px-6 mb-10 sm:px-10 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        

        <motion.div
          style={{ y }}
          className="relative max-w-4xl mx-auto overflow-hidden border border-gray-200 transition duration-300 ease-in-out"
        >
          {!showVideo ? (
            <div
              className="relative w-full pt-[56.25%] bg-white cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <img
                src="cookit logo.png"
                alt={`${featuredShowreelItem.title} thumbnail`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ) : (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                title={featuredShowreelItem.title}
                src="CookIT showreel.mp4"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
