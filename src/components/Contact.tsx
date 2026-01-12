import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-dark-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
                    <p className="text-gray-400 mb-12">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a 
                        href="mailto:contact@example.com" 
                        className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-600/20 mb-20"
                    >
                        Say Hello
                    </a>

                    {/* Stats Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20 text-left">
                        <div className="bg-dark-900 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                                <FaGithub /> GitHub Activity
                            </h3>
                            {/* Placeholder for GitHub Graph */}
                            <div className="bg-dark-800 h-32 rounded flex items-center justify-center text-gray-500 text-sm">
                                <img 
                                    src="https://ghchart.rshah.org/ebima" 
                                    alt="GitHub Streak" 
                                    className="w-full opacity-70 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                        <div className="bg-dark-900 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-bold mb-4 text-white">LeetCode Stats</h3>
                            <div className="space-y-4">
                                {/* Simulated LeetCode Stats */}
                                <div className="flex justify-between items-center text-sm text-gray-300">
                                    <span>Total Solved</span>
                                    <span className="font-bold text-white">150+</span>
                                </div>
                                <div className="w-full bg-dark-800 rounded-full h-2 overflow-hidden">
                                    <div className="bg-green-500 h-full w-[40%]"></div>
                                </div>
                                <div className="flex gap-4 text-xs text-gray-500">
                                    <span>Easy: 60</span>
                                    <span>Medium: 80</span>
                                    <span>Hard: 10</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-8">
                        {[FaGithub, FaLinkedin, FaTwitter, FaEnvelope].map((Icon, i) => (
                            <a key={i} href="#" className="text-2xl text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
