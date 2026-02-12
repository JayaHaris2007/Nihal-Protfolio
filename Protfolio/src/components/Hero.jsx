import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-light transition-colors duration-300">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-accent font-semibold text-lg mb-4"
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight"
                    >
                        Niyal Ahmed N
                        <br />
                        <span className="text-secondary">Full Stack Developer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-secondary text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
                    >
                        CSE student at Sankara Polytechnic College passionate about building modern, responsive, and user-friendly web experiences with clean UI & performance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors shadow-lg hover:shadow-xl text-center"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white dark:hover:text-black transition-all text-center"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
