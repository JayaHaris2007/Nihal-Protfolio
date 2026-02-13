import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award } from 'lucide-react';
// import internshipCert from '../assets/internship-certificate.jpg'; 

const Internship = () => {
    const internship = {
        company: 'App Innovation Technologies Pvt Ltd',
        role: 'MERN Stack Intern',
        duration: '15th May 2025 - 31st May 2025',
        description: [
            "I completed a 2.5-month MERN Stack Internship where I gained hands-on experience in full-stack web development. During the internship, I worked on real-time projects in a team environment and strengthened my skills in frontend development, backend development, and database integration.",
            "Throughout the internship, I built responsive web applications, integrated APIs, and worked with backend services to manage user data and authentication."
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js', 'Bootstrap', 'Node.js', 'Firebase', 'REST API Integration', 'Git & GitHub']
    };

    return (
        <section id="internship" className="py-20 bg-card transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Internship Experience</h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-card rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700 relative overflow-hidden"
                    >
                         {/* Decorative Background Element */}
                         <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
                         <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                                        <Briefcase className="text-accent" size={24} />
                                        {internship.role}
                                    </h3>
                                    <p className="text-lg text-secondary font-medium mt-1">
                                        {internship.company}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-secondary bg-light px-4 py-2 rounded-full border border-slate-100 dark:border-slate-700 w-fit">
                                    <Calendar size={18} className="text-accent" />
                                    <span className="text-sm font-medium">{internship.duration}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {internship.description.map((paragraph, index) => (
                                    <p key={index} className="text-secondary leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mb-8">
                                <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                    <Award className="text-accent" size={20} />
                                    Technologies Learned
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {internship.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Placeholder for Certificate Image - Uncomment when image is available */}
                            {/* 
                            <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                <img src={internshipCert} alt="Internship Certificate" className="w-full h-auto object-cover" />
                            </div> 
                            */}
                            
                            <div className="p-4 bg-light rounded-lg border border-slate-200 dark:border-slate-700 text-center">
                                <p className="text-sm text-secondary italic">
                                    Certificate image will be displayed here once uploaded to <code>src/assets/internship-certificate.jpg</code>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Internship;
