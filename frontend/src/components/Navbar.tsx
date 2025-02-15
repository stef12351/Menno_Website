import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleContactClick = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-4 w-full z-50">
            <div className="container mx-auto px-6 sm:px-8">
                <div className="bg-gradient-to-r from-[#005031] via-[#006039] to-[#1a745c] backdrop-blur-lg rounded-full shadow-[0_8px_32px_rgba(0,96,57,0.2)] border border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="py-4 sm:py-5 px-6 sm:px-8 flex items-center justify-between text-white"
                    >
                        {/* Logo Section */}
                        <Link to="/" className="flex items-center group">
                            <div className="flex items-center">
                                <div className="relative">
                                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#A4C2C2] via-white to-[#A4C2C2] bg-clip-text text-transparent">
                                        Pro
                                    </span>
                                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white/90 to-white text-transparent bg-clip-text">
                                        shine
                                    </span>
                                    <Sparkles className="absolute -top-1 -right-4 h-3 w-3 sm:h-4 sm:w-4 text-[#A4C2C2] group-hover:text-white transition-all duration-300" />
                                </div>
                            </div>
                            <span className="text-base sm:text-lg font-medium ml-2 text-[#A4C2C2] group-hover:text-white transition-all duration-300">
                                YACHTCARE
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <nav className="flex items-center space-x-8">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Diensten', path: '/services' },
                                    { name: 'Galerij', path: '/more-images' },
                                    { name: 'Blog', path: '/blog' },
                                    { name: 'Over Ons', path: '/about-us' }
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="relative text-sm uppercase tracking-wider font-medium text-white/90 hover:text-white transition-all duration-300 group"
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-[#A4C2C2] via-white to-[#A4C2C2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    </Link>
                                ))}
                            </nav>

                            <div className="flex items-center space-x-6 pl-6 border-l border-white/10">
                                <motion.span
                                    whileHover={{ scale: 1.02 }}
                                    className="hidden lg:flex items-center text-[#A4C2C2] hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <Phone className="h-4 w-4 mr-2" />
                                    <span className="text-sm font-medium">+31 642519677</span>
                                </motion.span>

                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleContactClick}
                                    className="bg-gradient-to-r from-white via-[#f8f8f8] to-white text-[#006039] px-6 py-2.5 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300 border border-white/50 shadow-[0_4px_16px_rgba(255,255,255,0.1)]"
                                >
                                    Offerte Aanvragen
                                </motion.button>
                            </div>
                        </nav>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    backdropFilter: isMenuOpen ? "blur(16px)" : "blur(0px)",
                }}
                transition={{ duration: 0.3 }}
                className={`fixed inset-0 bg-[#006039]/90 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'} z-40`}
            >
                <div className="container mx-auto px-6 py-20">
                    <div className="flex flex-col items-center space-y-8">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Diensten', path: '/services' },
                            { name: 'Galerij', path: '/more-images' },
                            { name: 'Blog', path: '/blog' },
                            { name: 'Over Ons', path: '/about-us' }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <motion.button
                            onClick={() => {
                                handleContactClick();
                                setIsMenuOpen(false);
                            }}
                            className="bg-white text-[#006039] px-8 py-3 rounded-full font-medium hover:bg-[#A4C2C2] transition-colors"
                        >
                            Contact
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </header>
    );
};

export default Navbar;