import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#006039] pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-[#A4C2C2]">Pro</span>
                            <span className="text-2xl font-bold text-white">shine</span>
                            <Sparkles className="h-4 w-4 text-[#A4C2C2] ml-1" />
                        </div>
                        <p className="text-green-200 text-sm leading-relaxed">
                            Premium yacht care services voor eigenaren die alleen het beste willen voor hun boot.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Linkedin className="w-5 h-5 text-white" />
                            </motion.a>
                            <motion.a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </motion.a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-green-200 hover:text-white transition">Home</Link></li>
                            <li><Link to="/services" className="text-green-200 hover:text-white transition">Diensten</Link></li>
                            <li><Link to="/more-images" className="text-green-200 hover:text-white transition">Galerij</Link></li>
                            <li><Link to="/blog" className="text-green-200 hover:text-white transition">Blog</Link></li>
                            <li><Link to="/about-us" className="text-green-200 hover:text-white transition">Over Ons</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-green-200">Complete Boot Detailing</li>
                            <li className="text-green-200">Bescherming & Onderhoud</li>
                            <li className="text-green-200">Periodiek Onderhoud</li>
                            <li className="text-green-200">Custom Services</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-green-200">+31 6 42519677</li>
                            <li className="text-green-200">info@proshine.com</li>
                            <li className="text-green-200">Amsterdam, Noord-Holland</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-green-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-green-200 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Proshine Yachtcare. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <a href="/privacy" className="text-green-200 hover:text-white text-sm transition">Privacy Policy</a>
                            <a href="/terms" className="text-green-200 hover:text-white text-sm transition">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;