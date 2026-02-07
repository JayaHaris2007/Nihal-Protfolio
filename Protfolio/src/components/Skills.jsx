import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Blocks, Globe, Database } from 'lucide-react';

const skills = [
    { name: 'HTML5', level: 'Advanced', icon: <Globe size={32} /> },
    { name: 'CSS3', level: 'Advanced', icon: <Layout size={32} /> },
    { name: 'JavaScript', level: 'Intermediate', icon: <Code size={32} /> },
    { name: 'React.js', level: 'Intermediate', icon: <Blocks size={32} /> },
    { name: 'Tailwind CSS', level: 'Advanced', icon: <Layout size={32} /> },
    { name: 'Git', level: 'Basic', icon: <Database size={32} /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-light transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Skills</h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:-translate-y-1 group"
                        >
                            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-accent rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{skill.name}</h3>
                            <p className="text-secondary text-sm font-medium px-3 py-1 bg-light rounded-full inline-block">
                                {skill.level}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
