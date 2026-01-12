import React from 'react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-dark-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    
                    <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-4">
                        <p>
                            I am an entry-level Full-Stack Web Developer with hands-on experience building and deploying web applications using JavaScript, TypeScript, React, Node.js, and Express.js.
                        </p>
                        <p>
                            With a strong foundation in modern web technologies and a self-driven mindset, I specialize in translating designs into scalable UI components and developing optimized, clean back-end architectures. I am experienced in working with databases like MongoDB and PostgreSQL, and implementing secure authentication and payment gateways.
                        </p>
                        <p>
                            My background includes a transition from Forensic Science to Tech, demonstrating my adaptability and passion for problem-solving. I am proficient in responsive web design, data structures, and algorithms.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
