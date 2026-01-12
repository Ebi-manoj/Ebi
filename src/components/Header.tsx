import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-end items-center">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-4 ml-4 pl-4 border-l border-gray-700">
            <a
              href="https://github.com/Ebi-manoj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ebi-manoj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
