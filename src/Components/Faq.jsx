import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <div className="max-w-xl mx-auto">
          <h5 className="text-lg sm:text-xl font-semibold text-gray-800">
            Find answers to questions about our services.
          </h5>
          <span className="relative inline-block sm:inline-block font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl mt-2">
            <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30"></span>
            <span className="relative">Frequently Asked Questions</span>
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`border rounded-lg p-4 sm:p-5 transition-all ${openIndex === index ? 'bg-gray-100' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="flex justify-between items-center w-full text-left text-gray-800 font-medium text-sm sm:text-base md:text-lg"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <motion.svg
                  className="w-5 h-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="m6 9 6 6 6-6" />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="mt-2 text-gray-700 text-sm sm:text-base"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const faqData = [
  {
    question: 'What services does CookIT provide?',
    answer: 'CookIT helps businesses grow digitally through website development, digital marketing, social media management, content creation, and more.',
  },
  {
    question: 'How can CookIT help my business?',
    answer: 'We create a strong online presence for businesses by building websites, managing social media, and running marketing campaigns to attract more customers.',
  },
  {
    question: 'Do I need a website for my business?',
    answer: 'Yes! A website helps your business establish credibility, reach more customers, and showcase your products or services effectively.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A basic website takes around 1-2 weeks, while an advanced e-commerce site may take longer, depending on complexity.',
  },
  {
    question: 'Can you handle my social media accounts?',
    answer: 'Yes! We manage social media accounts by creating engaging content, running ads, and growing your audience strategically.',
  },
];

export default Faq;
