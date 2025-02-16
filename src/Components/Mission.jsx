import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <motion.section
            className="py-12 bg-gray-50 sm:py-16 lg:py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">

                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                            Transforming Businesses Digitally
                        </h2>
                    </motion.div>

                    {/* Content Section */}
                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                                style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}
                            ></div>
                        </div>

                        {/* Cards Section */}
                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            {[
                                { title: "Our Mission", text: "To transform businesses digitally by providing innovative, data-driven, and results-oriented digital solutions." },
                                { title: "Our Vision", text: "To be a trusted partner for businesses looking to scale and succeed in the digital world." },
                                {
                                    title: "Why Choose Us?",
                                    text: (
                                        <ul className="mt-4 text-lg leading-relaxed text-gray-900 list-disc pl-5">
                                            <li>Customized Strategies</li>
                                            <li>Creative Excellence</li>
                                            <li>Results-Driven Approach</li>
                                            <li>Dedicated Support</li>
                                        </ul>
                                    )
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col overflow-hidden shadow-xl"
                                >
                                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>

                                        {/* Check if item.text is a string or JSX */}
                                        {typeof item.text === "string" ? (
                                            <p className="mt-4 text-lg leading-relaxed text-gray-900">{item.text}</p>
                                        ) : (
                                            <div>{item.text}</div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </motion.section>
    );
};

export default Mission;
