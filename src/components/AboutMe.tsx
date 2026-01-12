import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const AboutMe: React.FC = () => {
  const highlights = [
    { icon: FaCode, text: 'Modern Tech Stack', color: 'text-blue-400' },
    { icon: FaLightbulb, text: 'Problem Solver', color: 'text-yellow-400' },
    { icon: FaRocket, text: 'Fast Learner', color: 'text-purple-400' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b bg-dark-800 -z-20" />

      {/* Subtle glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 leading-relaxed space-y-6 text-lg"
            >
              <p className="text-xl text-gray-200">
                I am an entry-level{' '}
                <span className="text-blue-400 font-semibold">
                  Full-Stack Web Developer
                </span>{' '}
                with hands-on experience designing, building, and deploying
                modern web applications, focusing on clean architecture,
                performance, and scalable solutions.
              </p>

              <p>
                With a strong foundation in modern web development and a
                self-driven mindset, I focus on translating designs into
                scalable UI components and building clean, efficient systems,
                while actively exploring new technologies to continuously
                improve performance, maintainability, and overall product
                quality.
              </p>

              <p>
                My background includes a transition from{' '}
                <span className="text-purple-400 font-medium">
                  Forensic Science to Tech
                </span>
                , demonstrating my adaptability and passion for problem-solving.
                I am proficient in responsive web design, data structures, and
                algorithms.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <item.icon className={`text-3xl mb-3 ${item.color}`} />
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 rounded-full border border-green-500/30">
                    <FaLeaf className="text-green-400 text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 font-medium">
                    A Quote That Inspires Me
                  </p>
                  <blockquote className="relative">
                    <span className="absolute -left-2 -top-2 text-6xl text-green-400/20 font-serif">
                      "
                    </span>
                    <p className="italic text-gray-300 text-xl font-light leading-relaxed pl-6">
                      According to all aerodynamics laws, the bumblebee cannot
                      fly because its body weight is not in the right proportion
                      to its wingspan. But ignoring this law, the bee flies
                      anyway.
                    </p>
                    <span className="absolute -right-2 bottom-0 text-6xl text-green-400/20 font-serif">
                      "
                    </span>
                  </blockquote>
                  <p className="text-sm text-gray-500 mt-4 pl-6 italic">
                    — A reminder that your potential is limitless.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
