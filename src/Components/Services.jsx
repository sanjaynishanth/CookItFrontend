import React, { useEffect, useRef } from "react";
import services from "../utils/data";
import "./Services.css";

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const middleScreen = window.innerHeight / 1.5;
          if (rect.top < middleScreen) {
            const tiltAngle = index % 2 === 0 ? -3 : 3;
            card.style.transform = `rotate(${tiltAngle}deg)`;
          } else {
            card.style.transform = "rotate(0deg)";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Title Section */}
      <div className="title-container" id="services">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl lg:text-3xl">
          What we do ?
        </h1>
        <span className="relative inline-flex sm:inline block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
          <span className="relative">Our Services</span>
        </span>
      </div>

      {/* Services Section */}
      <div className="service-container">
        <div className="service-wrapper">
          {/* Left Side - Image Section */}
          <div className="service-image">
            <img src="Devices.gif" alt="Service Showcase" />
          </div>

          {/* Right Side - Cards */}
          <div className="wrapper">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="card"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <h2>
                  <span>Service #{service.id}</span> <strong>{service.title}</strong>
                </h2>
                <ul>
                  {service.points.map((point, i) => (
                    <p key={i} className="font-[Inter] mt-4">{"->"} {point}</p>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
