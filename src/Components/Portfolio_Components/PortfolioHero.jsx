import React from "react";
import logo from '../../assets/logo.png'

const PortfolioHero = () => {
  return (
    // Set a clean white background and full viewport height
    <section className="relative h-screen bg-gray-50 flex flex-col overflow-hidden font-sans">


      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Vertical Lines */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 lg:left-1/4"></div>
        <div className="absolute right-6 top-0 bottom-0 w-px bg-gray-200 lg:right-1/4"></div>

        {/* Horizontal Lines & Dots - simplified for effect */}
        <div className="absolute left-6 right-6 top-1/4 h-px bg-gray-200 lg:left-1/4 lg:right-1/4"></div>
        <div className="absolute left-6 right-6 bottom-1/4 h-px bg-gray-200 lg:left-1/4 lg:right-1/4"></div>

        {/* Dots - simplified for effect */}
        <div className="absolute top-[80px] left-[20px] w-2 h-2 bg-gray-400 rounded-full lg:left-[24%]"></div>
        <div className="absolute bottom-[80px] left-[20px] w-2 h-2 bg-gray-400 rounded-full lg:left-[24%]"></div>
        <div className="absolute top-[80px] right-[20px] w-2 h-2 bg-gray-400 rounded-full lg:right-[24%]"></div>
        <div className="absolute bottom-[80px] right-[20px] w-2 h-2 bg-gray-400 rounded-full lg:right-[24%]"></div>
      </div>

      {/* Top Menu (Matching the typography and layout of the image) */}
      <div className="flex justify-between items-center px-6 py-6 z-10 lg:px-24">
        {/* Menu on the left - Changed from font-light to font-normal for better balance */}
        <a
          href="/"
          title="Home"
          className="text-gray-900 text-lg tracking-wider cursor-pointer font-normal"
        >
          Home
        </a>

        {/* Brand Name (Pocky) - Kept font-normal as it was */}
        {/* <h1 className="text-xl md:text-2xl font-normal text-gray-900 tracking-widest uppercase">CookIT</h1> */}
        <img src={logo} alt="" className="w-20 h-12" />

        {/* Contact Us on the right - Changed from font-light to font-normal */}
        <a
          href="/contact"
          title="Contact"
          className="text-gray-900 text-lg tracking-wider cursor-pointer font-normal"
        >
          Contact Us
        </a>
      </div>

      {/* Hero Content (Central and dominant typography) */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 relative z-10">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 leading-none tracking-tight mb-4 max-w-6xl">
          {/* *** FONT WEIGHT ADJUSTED HERE: font-extrabold -> font-bold *** */}
          Elevating your brand with exceptional
          {/* DESIGN - Highlighted with a light purple/blue background and tilt for style */}
          <span
            className="inline-block bg-[#7859FF] text-white px-6 py-2 ml-4 mt-4 lg:mt-0 rounded-md shadow-lg transform -rotate-2"
            style={{
              backgroundColor: '#2563EB', // A light purple/blue shade
              boxShadow: '0 4px 15px rgba(120, 89, 255, 0.4)'
            }}
          >
            DESIGN
          </span>
        </h2>
      </div>


    </section>
  );
};

export default PortfolioHero;