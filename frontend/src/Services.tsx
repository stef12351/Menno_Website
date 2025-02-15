import { useNavigate } from 'react-router-dom';
import { ChevronRight, Shield, Ship, Clock, Star, Wrench } from 'lucide-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Services = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="min-h-screen bg-[#ffffff]">
            <nav>
                <Navbar />
            </nav>

            {/* Hero Section */}
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
                                    Onze Diensten
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                                >
                                    Premium Yacht Care Services
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-600 max-w-2xl mx-auto text-lg"
                                >
                                    Ontdek onze uitgebreide diensten voor het perfecte onderhoud van uw kostbare investering
                                </motion.p>
                            </div>

                            {/* Main Services Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {[
                                    {
                                        icon: <Ship className="w-8 h-8" />,
                                        title: "Complete Boot Detailing",
                                        description: "Van romp tot dek, wij zorgen voor een complete transformatie",
                                        features: [
                                            "Exterieur reiniging en polijsten",
                                            "Interieur detailing",
                                            "Teak deck onderhoud",
                                            "Anti-fouling behandeling"
                                        ],
                                        price: "Vanaf €750"
                                    },
                                    {
                                        icon: <Shield className="w-8 h-8" />,
                                        title: "Bescherming & Coating",
                                        description: "Langdurige bescherming tegen weer en water",
                                        features: [
                                            "Ceramic coating",
                                            "Wax behandeling",
                                            "UV bescherming",
                                            "Gelcoat herstel"
                                        ],
                                        price: "Vanaf €950"
                                    },
                                    {
                                        icon: <Clock className="w-8 h-8" />,
                                        title: "Periodiek Onderhoud",
                                        description: "Regelmatig onderhoud voor een blijvende glans",
                                        features: [
                                            "Maandelijkse controle",
                                            "Seizoensvoorbereiding",
                                            "Winter stalling service",
                                            "Flexibele planning"
                                        ],
                                        price: "Vanaf €250/maand"
                                    }
                                ].map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
                                    >
                                        {/* Main content */}
                                        <div className="p-8 flex-1 flex flex-col">
                                            {/* Icon */}
                                            <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                                {service.icon}
                                            </div>

                                            {/* Title and description */}
                                            <h3 className="text-xl font-semibold mb-4 text-[#006039]">{service.title}</h3>
                                            <p className="text-gray-600 mb-6">{service.description}</p>

                                            {/* Features list - will take remaining space */}
                                            <div className="flex-1">
                                                <ul className="space-y-3">
                                                    {service.features.map((feature, i) => (
                                                        <li key={i} className="flex items-center text-gray-600">
                                                            <Star className="w-4 h-4 mr-2 text-[#006039]" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Footer - will stay at bottom */}
                                        <div className="mt-auto border-t border-gray-100">
                                            <div className="px-8 py-4 bg-gray-50">
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => navigate('/#contact')}  // Add this onClick handler
                                                    className="w-full bg-[#006039] text-white px-6 py-3 rounded-full hover:bg-[#004c2d] transition-all duration-300 flex items-center justify-center space-x-2"
                                                >
                                                    <span className="font-medium">Offerte Aanvragen</span>
                                                    <ChevronRight className="w-5 h-5" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Services */}
                            <div className="mt-24">
                                <h2 className="text-3xl font-bold text-[#006039] text-center mb-12">
                                    Aanvullende Diensten
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        {
                                            icon: <Wrench className="w-6 h-6" />,
                                            title: "Reparaties",
                                            description: "Kleine reparaties en onderhoud"
                                        },
                                        {
                                            icon: <Shield className="w-6 h-6" />,
                                            title: "Winterklaar maken",
                                            description: "Complete wintervoorbereiding"
                                        },
                                        {
                                            icon: <Ship className="w-6 h-6" />,
                                            title: "Transport",
                                            description: "Veilig transport van uw boot"
                                        },
                                        {
                                            icon: <Star className="w-6 h-6" />,
                                            title: "Custom Work",
                                            description: "Op maat gemaakte oplossingen"
                                        }
                                    ].map((service, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                                                <div className="text-[#006039]">{service.icon}</div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-[#006039] mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600">{service.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-24 text-center"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/#contact')}  // Update this onClick handler
                                    className="inline-flex items-center px-8 py-4 bg-[#006039] text-white rounded-full hover:bg-[#004c2d] transition-colors duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <span className="font-medium">Contact Voor Maatwerk</span>
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Services;