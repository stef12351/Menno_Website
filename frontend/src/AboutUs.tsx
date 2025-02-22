import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Phone, Star, Shield, Wrench, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProShineLogo from '../src/images/Proshine_logo.png';

const AboutUs: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleContactClick = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/#contact');
        }
    };

    return (
        <div className="min-h-screen bg-[#ffffff]">
            <nav>
                <Navbar />
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[#A4C2C2] uppercase tracking-wider font-medium"
                        >
                            Over Ons
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                        >
                            Uw Partner in Maritieme Perfectie
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-600 max-w-3xl mx-auto text-lg"
                        >
                            Bij ProShine combineren we jarenlange ervaring met een passie voor de maritieme wereld.
                            Ons doel is om de schoonheid en functionaliteit van uw jacht, zeilboot of kleine vaartuig
                            te behouden en te verbeteren.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-gradient-to-b from-green-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto" // Changed from max-w-4xl to allow more space
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006039] mb-8 text-center">
                            Ons Verhaal
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Opgericht uit liefde voor de zee en het vakmanschap, begon ProShine als een
                                    klein familiebedrijf met een grote droom: het bieden van hoogwaardige bootzorg
                                    en -onderhoud...
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 mt-12">
                                    {[
                                        { number: "15+", label: "Jaren Ervaring" },
                                        { number: "1000+", label: "Tevreden Klanten" },
                                        { number: "100%", label: "Klanttevredenheid" }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 }}
                                            className="text-center p-4 bg-green-50 rounded-xl" // Changed from p-6 to p-4
                                        >
                                            <div className="text-2xl font-bold text-[#006039]">{stat.number}</div>
                                            <div className="text-gray-600 text-sm">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                                    <img
                                        src="src/images/About_us.jpg"
                                        alt="ProShine team at work"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-green-50 p-3 rounded-lg">
                                            <Star className="h-8 w-8 text-[#006039]" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-[#006039]">15+ Jaren</p>
                                            <p className="text-gray-600">Maritieme Expertise</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006039] mb-6">
                            Gedreven door Passie en Perfectie
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Wij streven ernaar om elke boot te transformeren tot een waar kunstwerk – een
                            weerspiegeling van zowel technische perfectie als esthetische pracht.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Wrench className="h-8 w-8" />,
                                title: "    Vakmanschap",
                                description: "Elk detail telt. Onze experts leveren ongeëvenaarde kwaliteit in elke service."
                            },
                            {
                                icon: <Shield className="h-8 w-8" />,
                                title: "Betrouwbaarheid",
                                description: "Transparante communicatie en een zorgvuldige aanpak zorgen ervoor dat u op ons kunt rekenen."
                            },
                            {
                                icon: <Star className="h-8 w-8" />,
                                title: "Innovatie",
                                description: "Wij passen de nieuwste technieken toe en investeren continu in duurzame oplossingen."
                            },
                            {
                                icon: <Heart className="h-8 w-8" />,
                                title: "Passie",
                                description: "Onze liefde voor de maritieme wereld drijft ons om altijd het beste resultaat te leveren."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    <div className="text-[#006039]">{value.icon}</div>
                                </div>
                                <h3 className="text-xl font-semibold text-[#006039] mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-green-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-[#006039] rounded-2xl shadow-xl p-12 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Wilt u Meer Weten?
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Wij vertellen u graag meer over onze passie en expertise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleContactClick}
                                className="bg-white text-[#006039] px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-[#B3E9F2]"
                            >
                                <span className="font-medium">Plan Uw Gratis Consultatie</span>
                                <ChevronRight className="h-5 w-5" />
                            </motion.button>
                            <motion.a
                                href="tel:+31642519677"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 hover:border-[#B3E9F2] hover:text-[#B3E9F2]"
                            >
                                <Phone className="h-5 w-5" />
                                <span className="font-medium">Bel Ons Nu</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer>
                <Footer />
            </footer>

            {/* Mobile Logo */}
            <div className="md:hidden fixed top-0 left-0 z-50" style={{ position: 'fixed', top: 0, left: 0 }}>
                <Link to="/" className="flex items-start block">
                    <img
                        src={ProShineLogo}
                        alt="ProShine Logo"
                        className="w-48 h-48 object-contain -translate-y-14 -translate-x-6"
                        style={{ position: 'fixed' }}
                    />
                </Link>
            </div>

            {/* Mobile Hamburger - floating icon only */}
            <header className="md:hidden fixed top-4 w-full z-50">

            </header>
        </div>
    );
};

export default AboutUs;