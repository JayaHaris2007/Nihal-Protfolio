import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import aiThinkrImg from '../assets/aithinkr.jpg';
import examCompanionImg from '../assets/exam-companion.jpg';

const projects = [
    {
        title: 'AIThinkR',
        description: 'An AI-powered chatbox web application enabling real-time user interaction.',
        tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
        image: aiThinkrImg,
        liveLink: 'https://aithinkr-10ce0.web.app/',
        githubLink: 'https://github.com/JayaHaris2007/aithinkr13',
    },
    {
        title: 'AI-Exam Companion',
        description: 'A web application for exam preparation with AI-powered features.',
        tech: ['React.js', 'Tailwind CSS', 'HTML', 'JavaScript'],
        image: examCompanionImg,
        liveLink: 'https://aiexamcompanion.web.app/',
        githubLink: 'https://github.com/Jayakumar1212/AI-Exam-Companion',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-card transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
                        >
                            {/* Project Image */}
                            <div className="h-48 w-full relative overflow-hidden">
                                {typeof project.image === 'string' && project.image.startsWith('bg-') ? (
                                    <div className={`h-full w-full ${project.image}`}></div>
                                ) : (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-secondary mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-semibold px-3 py-1 bg-light text-secondary rounded-full border border-slate-100 dark:border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.liveLink}
                                        className="flex-1 flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-lg hover:bg-accent-hover transition-colors font-medium shadow-md hover:shadow-lg"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        className="flex-1 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-600 text-primary px-4 py-3 rounded-lg hover:bg-light transition-colors font-medium"
                                    >
                                        <Github size={18} /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
