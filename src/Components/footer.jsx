import React from "react";
import logo from "../assets/logo.png";
import { FloatingDock } from "./ui/FloatingDock";
import SocialMedia from "./ui/SocialMedia";

const Footer = () => {
    return (
        <section className="relative py-10 bg-gray-50 sm:pt-16 lg:pt-15 text-center">

<div className="flex justify-center">
    <hr className="border-t-2 border-gray-300 my-8 w-full max-w-5xl" />
</div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                {/* Centered Logo */}
                <div className="flex justify-center">
                    <img className="w-[120px]" src={logo} alt="Logo" />
                </div>

                {/* Floating Dock Centered */}
                <div className="mt-6 flex justify-center">
                    <FloatingDock desktopClassName="bottom-6" mobileClassName="fixed bottom-6 right-6" />
                </div>

                {/* Social Media Icons (Updated) */}
                <div className="mt-6 flex justify-center">
                    <SocialMedia /> {/* Replacing previous static social icon */}
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-600 mt-6">
                    © CookIT {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;
