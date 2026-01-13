import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';

const AboutMe: React.FC = () => {
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
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto rounded-full"
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
                Hi, glad you’re here. I’m an entry-level{' '}
                <span className="text-blue-400 font-semibold">
                  Full-Stack Web Developer
                </span>{' '}
                who enjoys building modern web applications and learning how
                things work behind the scenes.
              </p>

              <p>
                I like turning ideas and designs into clean, responsive user
                interfaces and writing simple, efficient code. I’m always
                curious to learn new technologies and improve the way I build
                and structure applications.
              </p>

              <p>
                I started my journey in{' '}
                <span className="text-purple-400 font-medium">
                  Forensic Science and moved into Tech
                </span>
                , which helped me develop a strong problem-solving mindset. I
                enjoy working with responsive design, basic data structures, and
                building real-world projects that solve practical problems.
              </p>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 pt-10 border-t border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-full border border-green-500/30 shadow-lg shadow-green-500/5">
                    <FaLeaf className="text-green-400 text-3xl" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.2em] mb-4 font-medium opacity-80">
                    A Quote That Inspires Me
                  </p>
                  <blockquote className="relative">
                    <span className="absolute -left-4 -top-6 text-7xl text-green-400/10 font-serif pointer-events-none">
                      "
                    </span>
                    <p className="italic text-gray-200 text-xl md:text-2xl font-light leading-relaxed px-2 md:pl-6 md:pr-4 font-['Playfair_Display']">
                      According to all aerodynamics laws, the bumblebee cannot
                      fly because its body weight is not in the right proportion
                      to its wingspan. But ignoring this law, the bee flies
                      anyway.
                    </p>
                    <span className="absolute -right-2 -bottom-8 text-7xl text-green-400/10 font-serif pointer-events-none">
                      "
                    </span>
                  </blockquote>
                  <div className="mt-8 flex flex-col md:flex-row items-center gap-3 md:pl-6">
                    <div className="h-px w-8 bg-green-500/30 hidden md:block" />
                    <p className="text-sm text-gray-400 italic font-medium tracking-wide">
                      A reminder that your potential is limitless.
                    </p>
                  </div>
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
