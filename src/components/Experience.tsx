import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent inline-block">
            Experience & Education
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <FaBriefcase className="text-blue-500 text-2xl" />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>

            <div className="border-l-2 border-gray-700 ml-3 pl-8 pb-8 relative">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></span>
              <div>
                <h4 className="text-xl font-bold text-gray-100">
                  Project Experience
                </h4>
                <span className="text-sm text-blue-400">01/2025 – Present</span>
                <ul className="mt-4 space-y-2 text-gray-400 list-disc pl-4">
                  <li>
                    Built and deployed static and dynamic web applications using
                    React, Node.js, and MongoDB.
                  </li>
                  <li>
                    Integrated REST APIs, authentication, authorization, and
                    payment gateways.
                  </li>
                  <li>
                    Supported containerized and cloud deployments using Docker,
                    AWS, and Nginx.
                  </li>
                  <li>
                    Assisted junior learners with coding interviews and DSA
                    preparation.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <FaGraduationCap className="text-purple-500 text-2xl" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-gray-700 ml-3 pl-8 relative">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></span>
                <div>
                  <h4 className="text-xl font-bold text-gray-100">
                    MERN Stack Development
                  </h4>
                  <p className="text-gray-300">Brototype, Kochi, Kerala</p>
                  <span className="text-sm text-purple-400">2025 – 2026</span>
                </div>
              </div>

              <div className="border-l-2 border-gray-700 ml-3 pl-8 relative">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></span>
                <div>
                  <h4 className="text-xl font-bold text-gray-100">
                    Bachelor of Science (BSc) – Forensic Science
                  </h4>
                  <p className="text-gray-300">
                    Yenepoya University / YIASCM College, Mangalore
                  </p>
                  <span className="text-sm text-purple-400">2020 – 2023</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
