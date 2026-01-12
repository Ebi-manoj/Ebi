import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import LightRays from './LightRays';

const Hero: React.FC = () => {
  const floatingIcons = [
    { Icon: FaReact, color: '#61DAFB', delay: 0 },
    { Icon: FaNodeJs, color: '#339933', delay: 2 },
    { Icon: SiTypescript, color: '#3178C6', delay: 4 },
    { Icon: SiMongodb, color: '#47A248', delay: 1 },
    { Icon: FaDocker, color: '#2496ED', delay: 3 },
    { Icon: FaAws, color: '#FF9900', delay: 5 },
    { Icon: FaDatabase, color: '#336791', delay: 2.5 },
    { Icon: SiTailwindcss, color: '#06B6D4', delay: 4.5 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 -z-20" />
      
      <div className="absolute inset-0 z-0">
        <LightRays
          raysSpeed={1.7}
          lightSpread={1}
          raysColor="#ffffff" 
          className="opacity-100"
        />
      </div>

      {/* Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-400 font-medium tracking-wide mb-2">
              FULL STACK DEVELOPER
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hi, I'm Ebi
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I build scalable, responsive, and aesthetically pleasing web
              applications using modern technologies like React, Node.js, and
              TypeScript.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-600/20"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-dark-700 hover:bg-dark-600 text-white rounded-full font-medium transition-colors border border-gray-700"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Floating Icons */}
          {floatingIcons.map(({ Icon, color, delay }, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl md:text-5xl bg-dark-800 p-4 rounded-xl border border-gray-700 shadow-xl"
              style={{ color }}
              animate={{
                y: [-20, 20, -20],
                x: Math.sin(index) * 20,
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delay,
              }}
              initial={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
            >
              <Icon />
            </motion.div>
          ))}

          {/* Profile Image Main Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-dark-700 overflow-hidden shadow-2xl"
          >
            <img
              src="/profile-portfolio.JPG"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
