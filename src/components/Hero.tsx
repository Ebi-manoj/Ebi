import React from 'react';
import { motion } from 'framer-motion';
import LightRays from './LightRays';
import { IconCloud } from './ui/icon-cloud';
import { TypingAnimation } from './ui/typing-animation';
import { WordRotate } from './ui/word-rotate';

const Hero: React.FC = () => {
  const slugs = [
    'typescript',
    'javascript',
    'java',
    'react',
    'c',
    'html5',
    'css3',
    'express',
    'amazonaws',
    'postgresql',
    'mysql',
    'mongodb',
    'firebase',
    'nginx',
    'vercel',
    'docker',
    'git',
    'github',
    'gitlab',
    'visualstudiocode',
    'figma',
    'tailwindcss',
    'bootstrap',
    'postman',
    'eraser',
    'vite',
  ];
  const images = slugs.map(slug => `https://cdn.simpleicons.org/${slug}`);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900 -z-20" />

      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto md:px-6 grid md:grid-cols-2 md:gap-12 items-center h-full">
        {/* LEFT COLUMN: Image AND Text */}
        <div className="flex flex-col justify-center items-start space-y-8 z-10 w-full pl-4 md:pl-10">
          {/* Profile Image - Left Aligned & Perfectly Designed */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-24 h-24 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src="/profile-portfolio.JPG"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* <h2 className="text-blue-300 font-medium tracking-wider mb-3 text-sm md:text-base uppercase ml-1">
                Full Stack Developer
              </h2> */}
              <WordRotate
                className="text-lg md:text-xl font-bold tracking-wide"
                words={[
                  <span key="1" className="text-blue-300">
                    Full Stack Developer
                  </span>,
                  <span
                    key="2"
                    className="flex flex-wrap gap-2 items-center justify-start"
                  >
                    <span className="text-blue-400">User Interfaces</span>
                    <span className="text-gray-400 text-base">•</span>
                    <span className="text-green-400">Application Backends</span>
                    <span className="text-gray-400 text-base">•</span>
                    <span className="text-purple-400">Cloud & Hosting</span>
                  </span>,
                  <span key="3" className="text-purple-300">
                    Open to Collaborate
                  </span>,
                ]}
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white hover:tracking-wide transition-all duration-300">
                Hi, I'm Ebi
              </h1>
              <TypingAnimation className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                I build scalable, responsive, and aesthetically pleasing web
                applications using modern technologies like React, Node.js, and
                TypeScript.
              </TypingAnimation>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: Only Floating Icons */}
        <div className="relative h-[600px] flex items-center justify-center w-full">
          <IconCloud images={images} width={600} height={600} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
