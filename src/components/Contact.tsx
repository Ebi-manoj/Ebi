import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      href: 'https://github.com/Ebi-manoj',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      Icon: FaLinkedin,
      href: 'https://linkedin.com/ebi-manoj',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      Icon: FaInstagram,
      href: 'https://instagram.com/ebi.manoj',
      label: 'Twitter',
      color: 'hover:text-purple-600',
    },
    {
      Icon: FaEnvelope,
      href: 'mailto:ebimanoj28@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background - Matching theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-20" />

      {/* Subtle glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Say Hello
            </a>
          </motion.div>

          {/* GitHub Activity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <FaGithub className="text-2xl text-gray-300" />
                <h3 className="text-xl font-bold text-white">
                  GitHub Contributions
                </h3>
              </div>
              <div className="bg-slate-950/50 rounded-lg p-4 overflow-hidden">
                <img
                  src="https://ghchart.rshah.org/409ba5/Ebi-manoj"
                  alt="GitHub Contributions"
                  className="w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-gray-500 text-sm text-center mt-4">
                Consistent coding activity and open-source contributions
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">Connect with me</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-3xl text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                >
                  <social.Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
