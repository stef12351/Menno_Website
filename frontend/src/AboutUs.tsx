import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AboutUs = () => {
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
                {/* Replace the existing header code with the shared Navbar */}
                <Navbar />
            </nav>

            {/* Main Content */}
            <main className="pt-32">
                {/* Your existing AboutUs content goes here */}
                <section className="pt-32 pb-20">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white"></div>
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="container mx-auto px-4"
                            >
                                <div className="text-center mb-16">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-[#A4C2C2] uppercase tracking-wider font-medium"
                                    >
                                        Ons Verhaal
                                    </motion.span>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                                    >
                                        Premium Yacht Care Specialisten
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                                    >
                                        Met meer dan 10 jaar ervaring in het leveren van uitzonderlijke service aan de meest veeleisende jachteigenaren
                                    </motion.p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="grid md:grid-cols-2 gap-16 items-center"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="space-y-8"
                                    >
                                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                                            <h3 className="text-2xl font-semibold text-[#006039] mb-4">Onze Historie</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Opgericht vanuit een passie voor perfectie, is Proshine Yachtcare uitgegroeid tot een
                                                toonaangevende specialist in premium bootonderhoud. Onze reis begon met één missie:
                                                het leveren van ongeëvenaarde kwaliteit in yacht care services.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                                            <h3 className="text-2xl font-semibold text-[#006039] mb-4">Onze Missie</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Wij streven ernaar om elke boot die aan onze zorg wordt toevertrouwd te transformeren
                                                naar zijn optimale staat. Door continue innovatie en toewijding aan kwaliteit zorgen
                                                wij voor resultaten die de verwachtingen overtreffen.
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="relative"
                                    >
                                        <motion.img
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            src="/images/About_us.jpg"
                                            alt="Ons Team"
                                            className="rounded-2xl shadow-2xl w-full h-[600px] object-cover relative z-10"
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-24 grid md:grid-cols-4 gap-8"
                                >
                                    {[
                                        { title: "Kwaliteit", description: "Compromisloze aandacht voor detail in elk project" },
                                        { title: "Betrouwbaarheid", description: "Consistent excellent werk, keer op keer" },
                                        { title: "Professionaliteit", description: "Expert team met jarenlange ervaring" },
                                        { title: "Innovatie", description: "Gebruik van de nieuwste technologieën en technieken" }
                                    ].map((value, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                                                <div className="text-[#006039] text-xl font-bold">{index + 1}</div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-[#006039] mb-2">{value.title}</h3>
                                            <p className="text-gray-600">{value.description}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-24 text-center"
                                >
                                    <button
                                        onClick={handleContactClick}
                                        className="inline-flex items-center px-8 py-4 bg-[#006039] text-white rounded-full hover:bg-[#004c2d] transition-colors duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <span className="font-medium">Neem Contact Op</span>
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AboutUs;