import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import ProShineLogo from '../images/Proshine_logo.png';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/#contact");
    };

    return (
        <>
            {/* Desktop Navbar */}
            <header className="hidden md:block fixed top-4 w-full z-50">
                <div className="container mx-auto px-6 sm:px-8">
                    <div className="navbar-bg backdrop-blur-lg rounded-full shadow-[0_8px_32px_rgba(0,96,57,0.2)] border border-white/1">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-2 sm:py-3 px-6 sm:px-8 flex items-center justify-between text-white relative"
                        >
                            {/* Logo Section */}
                            <Link to="/" className="flex items-center group">
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-visible">
                                    <img
                                        src={ProShineLogo}
                                        alt="Proshine Yachtcare Logo"
                                        className="absolute object-contain"
                                        style={{
                                            top: '50%',
                                            left: '90%',
                                            transform: 'translate(-50%, -50%) scale(3.5)',
                                            transformOrigin: 'center',
                                        }}
                                    />
                                </div>
                            </Link>

                            {/* Desktop Navigation - visible on md and larger */}
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
                                <div className="flex items-center space-x-6 pl-6 border-l border-[#005031]">
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
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Mobile Hamburger - floating icon only */}
            <header className="md:hidden fixed top-4 w-full z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-end">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors mr-10"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{
                        opacity: isMenuOpen ? 1 : 0,
                        backdropFilter: isMenuOpen ? "blur(16px)" : "blur(0px)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-[#006039]/90 z-40"
                >
                    <div className="container mx-auto px-4 py-20">
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
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-medium text-white/90 hover:text-white transition-colors"
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
            )}
        </>
    );
};

export default Navbar;