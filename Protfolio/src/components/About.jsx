import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-card transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Left Column: Image/Placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-200 dark:bg-slate-700 rounded-2xl overflow-hidden shadow-xl rotate-3 hover:rotate-0 transition-all duration-300">
                            <img src={profileImg} alt="Niyal Ahmed N" className="object-cover w-full h-full" />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Me</h2>
                        <div className="w-20 h-1.5 bg-accent mb-8 rounded-full"></div>

                        <p className="text-secondary text-lg leading-relaxed mb-6">
                            I am a dedicated Full Stack Developer and a 3rd year Computer Science Engineering student at Sankara Polytechnic College.
                        </p>
                        <p className="text-secondary text-lg leading-relaxed mb-6">
                            I specialize in building scalable, responsive, and user-friendly web applications using the MERN stack. I enjoy developing both frontend and backend solutions, designing efficient APIs, managing databases, and creating seamless user experiences. I am passionate about solving real-world problems and continuously enhancing my full stack development skills.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-light p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                                <span className="block text-accent font-bold text-xl mb-1">3rd Year</span>
                                <span className="text-sm text-secondary">CSE Student</span>
                            </div>
                            <div className="bg-light p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                                <span className="block text-accent font-bold text-xl mb-1">Full Stack</span>
                                <span className="text-sm text-secondary">Specialization</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
