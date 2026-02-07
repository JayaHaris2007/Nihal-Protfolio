import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-light transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Contact Info Side */}
                        <div className="bg-slate-900 p-10 md:w-2/5 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                                <p className="text-blue-200 mb-8 leading-relaxed">
                                    Open to internships, freelance projects, and learning opportunities. Feel free to say hi!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm text-blue-100">Front-End Development</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm text-blue-100">UI/UX Design</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm text-blue-100">Web Performance</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-10 md:w-3/5 bg-card">
                            <form>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-light border border-slate-200 dark:border-slate-700 focus:border-accent focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all text-primary placeholder-slate-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-light border border-slate-200 dark:border-slate-700 focus:border-accent focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all text-primary placeholder-slate-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg bg-light border border-slate-200 dark:border-slate-700 focus:border-accent focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all resize-none text-primary placeholder-slate-400"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
