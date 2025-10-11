import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false); // Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Start loader

    emailjs
      .sendForm(
        "service_qs8r2vd",
        "template_e4vbrm4",
        form.current,
        "wSI_7qZvtyAj5evDA"
      )
      .then(
        () => {
          setIsSending(false);
          toast.success("✅ Email Sent Successfully!", {
            duration: 3000,
            position: "top-center",
          });
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          toast.error("❌ Failed to send email. Try again!", {
            duration: 3000,
            position: "top-center",
          });
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-white min-h-screen relative">
      {/* Toast notifications */}
      <Toaster />

      {/* Navbar */}
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            title="CookIT"
            className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            <img className="w-24 h-auto" src="logo.png" alt="Logo" />
          </a>

          {/* Home Button */}
          <a
            href="/"
            title="Go Home"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-md hover:shadow-xl transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 11.5L12 3l10 8.5M5 10.5V21h14v-10.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 21v-6h6v6"
              />
            </svg>
            Home
          </a>
        </div>
      </header>

      {/* Title Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl text-center mx-auto mb-12 mt-12 px-4"
      >
        <h1 className="font-bold text-gray-800 text-4xl md:text-5xl mb-2">
          Let’s Collaborate
        </h1>
        <span className="relative inline-flex font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 absolute inset-0 w-full h-full"></span>
          <span className="relative">Contact Us</span>
        </span>
      </motion.div>

      {/* Contact Form + GIF */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 max-w-6xl mx-auto relative">
        {/* Left - Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 bg-white rounded-2xl shadow-md p-8 w-full border border-[#ddd] relative"
        >
          {/* Overlay loader */}
          {isSending && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center z-50 rounded-2xl">
              <div className="border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
              <span className="mt-4 text-blue-600 font-medium">Sending...</span>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 focus:border-black focus:ring-0 rounded-md px-4 py-3 outline-none transition duration-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 focus:border-black focus:ring-0 rounded-md px-4 py-3 outline-none transition duration-200"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject (eg: Website Development & Design)"
              className="w-full border border-gray-300 focus:border-black focus:ring-0 rounded-md px-4 py-3 outline-none transition duration-200"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 focus:border-black focus:ring-0 rounded-md px-4 py-3 outline-none transition duration-200 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSending}
              className={`rounded-md px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white ${
                isSending
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-xl transition duration-200"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>

        {/* Right - GIF */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src="Mail sent.gif"
            alt="Contact Animation"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      <div className="flex justify-center">
        <hr className="border-t-2 border-gray-300 my-10 w-full max-w-5xl" />
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-auto py-4 w-full mb-4">
        <p className="text-sm">© CookIT {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </section>
  );
}
