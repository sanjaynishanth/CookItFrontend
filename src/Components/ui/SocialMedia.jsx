import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa"; // Import all required icons

const SocialMedia = () => {
  const socialLinks = [
    { href: "https://linkedin.com/", name: "LinkedIn", color: "bg-[#0274b3]", icon: <FaLinkedinIn /> },
    { href: "https://www.instagram.com/", name: "Instagram", color: "bg-gradient-to-r from-[#405de6] via-[#b33ab4] to-[#fd1f1f]", icon: <FaInstagram /> },
  ];

  return (
    <ul className="flex justify-center items-center space-x-2"> {/* Reduced spacing */}
      {socialLinks.map((social, index) => (
        <li key={index} className="relative group">
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex justify-center items-center w-8 h-8 rounded-full bg-white text-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden" // Reduced size
          >
            <div
              className={`absolute bottom-0 left-0 w-full h-0 ${social.color} transition-all duration-300 group-hover:h-full`}
            ></div>
            <div className="relative z-10 text-sm">{social.icon}</div> {/* Adjusted icon size */}
          </a>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"> {/* Adjusted tooltip size */}
            {social.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
