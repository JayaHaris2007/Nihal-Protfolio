import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-card py-10 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/nihalwebproject55-del" target="_blank" rel="noopener noreferrer" className="p-3 bg-light text-secondary rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/niyal-ahmed-n-b79b83310/" target="_blank" rel="noopener noreferrer" className="p-3 bg-light text-secondary rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/mr_nxhxl.07/" target="_blank" rel="noopener noreferrer" className="p-3 bg-light text-secondary rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
                        <Instagram size={20} />
                    </a>
                </div>

                <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full opacity-50"></div>

                <p className="text-secondary text-sm">
                    © 2026 Niyal Ahmed N. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
