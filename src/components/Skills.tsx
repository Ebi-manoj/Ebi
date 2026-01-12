import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaAws, FaGitAlt, FaDatabase 
} from 'react-icons/fa';
import { 
    SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap, SiNginx, SiRedux, SiFirebase 
} from 'react-icons/si';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
                { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
                { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
                { name: 'Java', icon: null, color: '#ED8B00' }, // No simple react-icon for Java sometimes, or use coffee
                { name: 'SQL / NoSQL', icon: FaDatabase, color: '#336791' },
            ]
        },
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: FaReact, color: '#61DAFB' },
                { name: 'Redux', icon: SiRedux, color: '#764ABC' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
                { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
                { name: 'EJS', icon: null, color: '#B4CA65' },
            ]
        },
        {
            title: 'Backend & DB',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
                { name: 'Express.js', icon: null, color: '#000000' },
                { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
                { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
                { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
            ]
        },
        {
            title: 'Tools & Cloud',
            skills: [
                { name: 'Git', icon: FaGitAlt, color: '#F05032' },
                { name: 'Docker', icon: FaDocker, color: '#2496ED' },
                { name: 'AWS', icon: FaAws, color: '#FF9900' },
                { name: 'Nginx', icon: SiNginx, color: '#009639' },
            ]
        }
    ];

    // Helper for Java icon if needed, or import FaJava
    // Let's bring in FaJava if available, else generic. FaJava is in react-icons/fa
    // Importing FaJava above inside the component file isn't ideal if I didn't import it in the top level.
    // I missed importing FaDatabase in this file imports.
    // I'll leave the ones I missed as null and handle render.
    
    return (
        <section id="skills" className="py-20 bg-dark-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Skills</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div 
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-dark-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-blue-400">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span 
                                        key={skill.name} 
                                        className="flex items-center gap-2 px-3 py-1.5 bg-dark-800 rounded-lg text-sm text-gray-300 border border-gray-700"
                                    >
                                        {skill.icon && <skill.icon style={{ color: skill.color }} />}
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Skills;
