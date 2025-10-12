import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Showreel from './Showreel';
import { Link } from 'react-scroll';
import About from './About';

const Hero = () => {
  const [expanded, setExpanded] = useState(false);  // Track if the menu is expanded

  return (
    <motion.div
      className="overflow-x-hidden bg-gray-50"
      initial={{ opacity: 0 }} // Initial state: hidden
      animate={{ opacity: 1 }} // Animate to fully visible
      exit={{ opacity: 0 }}    // Exit state: hidden again
      transition={{ duration: 1 }} // Transition duration
    >
      <header className="py-4 md:py-6" id='home'>
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img className="w-25 h-auto" src="logo.png" alt="" />
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}  // Toggle the expanded state on click
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
              {/* About Us link */}
              <Link
                to="about"
                title="About Us"
                className="text-base font-medium text-gray-900 transition-all duration-200 cursor-pointer rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                About Us
              </Link>

              {/* Services link */}
              <Link
                to="services"
                title="Services"
                className="text-base font-medium text-gray-900 transition-all duration-200 cursor-pointer rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Services
              </Link>

              {/* Projects link */}
              <a
                href="/portfolio"
                title="Projects"
                className="text-base font-medium text-gray-900 transition-all duration-200 cursor-pointer rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Projects
              </a>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="/contact"
                title=""
                className="inline-flex items-center justify-center w-full "
                role="button"
              >
                <button className="text-base font-medium rounded-md cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                  <img
                    src="call.svg"
                    alt="Call Icon"
                    width="15px"
                    className="mr-2"
                  />
                  Contact
                </button>
              </a>
            </div>
          </div>

          {/* Menu Dropdown for mobile view */}
          {expanded && (
            <motion.nav
              initial={{ opacity: 0, y: -50 }} // Initial state: hidden and offset vertically
              animate={{ opacity: 1, y: 0 }}    // Animate to visible and reset position
              exit={{ opacity: 0, y: -50 }}     // Exit state: hidden and offset
              transition={{ duration: 0.5 }}    // Transition duration
            >
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <Link to='home'>
                    <p className="flex items-center cursor-pointer  p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </p>

                  </Link>

                  <Link to='about'>

                    <p className="flex items-center cursor-pointer p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About Us </p>

                  </Link>

                  <Link to='services'>
                    <p className="flex items-center cursor-pointer p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Services </p>

                  </Link>


                  {/* <Link>
                  <a  title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Projects </a>
                  
                  </Link> */}

                  <a
                    href="/contact"
                    title=""
                    className="flex items-center w-full text-lg font-bold text-gray-900 transition-all duration-200 sm:w-auto sm:mt-0 rounded-xl font-pj cursor:pointer"
                    role="button"
                  >

                    <button className="rounded-md cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                      <img
                        src="call.svg"
                        alt="Call Icon"
                        width="15px"
                        className="mr-2"
                      />
                      Contact
                    </button>
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      <section className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="px-6 text-lg text-gray-600 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Spice Up Your Digital Presence with CookIT
            </motion.h1>

            <motion.p
              className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We craft digital experiences <br />
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative">that make brands unforgettable.</span>
              </span>
            </motion.p>



            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-10">
              {/* <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Get more customers
              </a> */}

              <motion.div

                title=""
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 sm:w-auto sm:mt-0 rounded-xl font-pj cursor:pointer"
                role="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link to='showreel'>
                  <button className="rounded-md cursor-pointer inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Watch Showreel
                  </button>
                </Link>
              </motion.div>
            </div>

            <p className="mt-6 text-base text-gray-500 font-inter">
              From stunning design to seamless development — we turn ideas into impact.
            </p>
          </div>
        </div>

        {/* <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <div className="relative mx-auto">
              <motion.div
                className="lg:max-w-6xl lg:mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Showreel />
              </motion.div>
            </div>
          </div>
        </div> */}

      </section>
    </motion.div>
  );
};

export default Hero;
