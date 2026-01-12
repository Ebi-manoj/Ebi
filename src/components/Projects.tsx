import React from 'react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'NOMAD',
      description:
        'A full-stack ride-sharing application with real-time tracking, payment integration, and google maps.',
      tech: ['MERN', 'TypeScript', 'Docker', 'AWS'],
      role: 'Full Stack',
      image: '/NOMAD.png',
      github: 'https://github.com/Ebi-manoj/Nomad',
      live: 'https://nomadsride.online',
    },
    {
      title: 'Netflix Clone',
      description:
        'Responsive streaming service clone with pixel-perfect UI and TMDB API integration.',
      tech: ['React', 'Tailwind', 'Firebase'],
      role: 'Frontend',
      image: 'NETFLIX.jpg',
      github: 'https://github.com/Ebi-manoj/Netflix-Clone',
    },
    {
      title: 'UniformX',
      description:
        'E-commerce web platform designed for selling sports jerseys with a streamlined product and order flow.',
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      role: 'Backend Focus',
      image: 'UNIFORMX.png',
      github: 'https://github.com/Ebi-manoj/UniformX',
      live: 'https://uniformx.shop',
    },

    {
      title: 'OLX Clone',
      description:
        'Classifieds platform with image upload and dynamic routing.',
      tech: ['React', 'Tailwind', 'Firebase'],
      role: 'Frontend',
      image: 'OLX.jpg',
      github: 'https://github.com/Ebi-manoj/OLX-Clone',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>

        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-dark-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={projects}
            direction="left"
            speed="slow"
            renderItem={project => (
              <div className="w-[350px] md:w-[450px] group relative bg-dark-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 relative z-20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-blue-400">
                        {project.role}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-700 rounded-full hover:bg-white hover:text-black transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-700 rounded-full hover:bg-white hover:text-black transition-colors"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-dark-900 rounded text-gray-300 border border-gray-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
