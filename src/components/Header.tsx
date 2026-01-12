import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-dark-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Ebi.dev
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-4 ml-4 pl-4 border-l border-gray-700">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-white transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin />
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-dark-800 border-b border-gray-700 md:hidden"
                        >
                            <nav className="flex flex-col p-6 gap-4">
                                {navLinks.map((link) => (
                                    <a 
                                        key={link.name} 
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
