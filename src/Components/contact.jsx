import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard.jsx";
import ContactImage from "../assets/5124556.gif";
import { Input, TextArea } from "./ui/Input.jsx";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setResponseMessage("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setResponseMessage(data.error || "Something went wrong. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("Error submitting form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div 
            className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div 
                className="text-center mb-12"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold text-gray-900">Let's Get In Touch</h1>
                <p className="text-lg text-gray-600 mt-3">
                    Let's Create Something Deliciously Digital !
                </p>
            </motion.div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Form Section */}
                <motion.div
                    className="flex flex-col justify-between"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="bg-white shadow-lg rounded-lg p-12 w-full max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xl font-medium text-gray-700">Your Name</label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="h-14 text-lg"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xl font-medium text-gray-700">Email Address</label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="h-14 text-lg"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xl font-medium text-gray-700">Write Your Message</label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="text-lg"
                                    placeholder="Write us your question here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <motion.button
                                    type="submit"
                                    className="flex items-center bg-blue-600 text-white font-medium text-xl py-3 px-6 pl-8 rounded-xl transition-all duration-200 hover:scale-95 cursor-pointer group relative"
                                    disabled={loading}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="ml-3">
                                        {loading ? "Sending..." : "Send"}
                                    </span>
                                </motion.button>
                                {responseMessage && (
                                    <p className="mt-3 text-center text-lg font-semibold text-gray-700">{responseMessage}</p>
                                )}
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Image & Info Cards Section */}
                <motion.div
                    className="flex flex-col justify-between"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <motion.div
                        className="flex justify-center items-center hidden lg:flex"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <CardContainer className="w-65 h-96">
                            <CardBody>
                                <CardItem className="rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={ContactImage}
                                        alt="Contact Illustration"
                                        className="w-full h-full object-cover"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </motion.div>

                    <motion.div 
                        className="mt-auto flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-8 mx-auto md:mr-[45px] text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {[
                            { title: "ADDRESS", text: "Coimbatore", icon: faLocationDot },
                            { title: "GET IN TOUCH", text: "cookinfotek@gmail.com\n+91 7604895101" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-4 shadow-md rounded-lg w-[180px] h-[100px] flex flex-col items-center transition-all duration-300 hover:scale-105 hover:bg-gray-200"
                                whileHover={{ scale: 1.1 }}
                            >
                                {item.icon && <FontAwesomeIcon icon={item.icon} className="text-blue-600 text-xl mb-1" />}
                                <h3 className="text-blue-600 text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-800 text-md">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactUs;
