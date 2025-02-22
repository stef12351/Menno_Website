import { Clock, DollarSign, Ship, Shield, Heart, Phone, Mail, MapPin, Star, ChevronLeft, ChevronRight, Search, Droplet, Sun, Check, AlertCircle, Calendar, Leaf, Wrench } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProShineLogo from '../src/images/Proshine_logo.png';

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const galleryItems = [
    {
      before: "/images/before_gray.jpg",
      after: "/images/after_gray.jpg",
      title: "Romp Renovatie"
    },
    {
      before: "/images/before_blue.jpg",
      after: "/images/after_blue.jpg",
      title: "Dek Renovatie"
    },
    {
      before: "/images/before_dark_grey.jpg",
      after: "/images/after_dark_gray.jpg",
      title: "Interieur Detail"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

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
      <main>
        <article>
          <section aria-label="Hero" className="relative h-screen">
            <div className="absolute inset-0">
              <img
                src="/images/Hero_Image.jpg?auto=format&fit=crop&w=2000&q=80"
                alt="Luxury boat"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
              />
              <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-10"></div>
            </div>

            {/* Main content container with adjusted padding */}
            <div className="relative h-full container mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-start sm:justify-center pt-24 sm:pt-0">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}
                className="max-w-3xl text-white space-y-4 sm:space-y-6 md:space-y-8"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Herstel de <span className="text-[#A4C2C2]">Glans</span> van Uw Vaartuig met <span className="text-[#A4C2C2]">Ongeëvenaarde Expertise</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                  Premium jachtpolijst- en reparatiediensten, speciaal ontworpen voor veeleisende bootbezitters in Nederland.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContactClick}
                    className="w-full sm:w-auto bg-[#A4C2C2] text-[#006039] px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg group hover:bg-[#B3E9F2]"
                  >
                    <span className="font-medium">Vraag Uw Gratis Offerte Aan</span>
                    <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Stats Section */}
              <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 left-4 right-4 md:right-20">
                <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-lg sm:max-w-xl md:max-w-none ml-auto">
                  {[
                    { number: "15+", label: "Jaren Expertise" },
                    { number: "1000+", label: "Tevreden Klanten" },
                    { number: "100%", label: "Klanttevredenheid" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      className="bg-white/10 backdrop-blur-md p-2 sm:p-4 rounded-lg text-center"
                    >
                      <div className="text-[#A4C2C2] text-xl sm:text-2xl md:text-3xl font-bold">
                        {stat.number}
                      </div>
                      <div className="text-white text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Services" id="services" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-white">
            <FadeInSection delay={0.2}>
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                  >
                    Uitmuntende Bootzorg, Afgestemd op Uw Levensstijl
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8"
                >
                  {[
                    {
                      icon: <Ship className="h-12 w-12" />,
                      title: "Professioneel Jachtpolijsten",
                      description: "Verhoog de natuurlijke schoonheid van uw vaartuig met ons nauwgezette polijstproces, dat beschermt tegen de zware maritieme omgeving."
                    },
                    {
                      icon: <Wrench className="h-12 w-12" />,
                      title: "Precisie Reparaties",
                      description: "Van kleine reparaties tot gedetailleerde restauraties, onze vakkundige technici brengen uw boot terug in topconditie."
                    },
                    {
                      icon: <Calendar className="h-12 w-12" />,
                      title: "Op Maat Gemaakte Onderhoudsplannen",
                      description: "Geniet van gemoedsrust met onderhoudsschema's die zijn afgestemd op uw specifieke gebruikspatronen en seizoensbehoeften."
                    },
                    {
                      icon: <Leaf className="h-12 w-12" />,
                      title: "Milieuvriendelijke Technieken",
                      description: "Wij maken gebruik van de nieuwste, milieubewuste producten en methoden om zowel uw vaartuig als onze oceanen te beschermen."
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                      <div className="p-8">
                        <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#006039] transition-colors duration-300">
                          <div className="group-hover:text-white transition-colors duration-300">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-[#006039]">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </FadeInSection>
          </section>

          <section aria-label="Portfolio" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-[#A4C2C2] uppercase tracking-wider font-medium"
                >
                  Portfolio
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                >
                  Transformatie Galerij
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 text-lg max-w-2xl mx-auto"
                >
                  Ontdek de opmerkelijke resultaten van onze premium yacht care services.
                  Elk project is een showcase van vakmanschap en toewijding.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {galleryItems.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group"
                  >
                    <div
                      className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsModalOpen(true);
                      }}
                    >
                      <div className="relative h-96">
                        <img
                          src={project.before}
                          alt={`Before ${project.title}`}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                          src={project.after}
                          alt={`After ${project.title}`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                            <div className="md:hidden flex items-center space-x-2">
                              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                Swipe to reveal
                              </span>
                              <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                <ChevronRight className="w-5 h-5 text-white" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-16"
              >
                <Link
                  to="/more-images"
                  className="inline-flex items-center px-8 py-4 bg-[#006039] text-white rounded-full hover:bg-[#B3E9F2] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="font-medium">Bekijk Meer Projecten</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </section>

          <section aria-label="Why Choose Us" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50">
            <FadeInSection delay={0.2}>
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                  >
                    Ervaar het Verschil van Maritieme Perfectie
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8"
                >
                  {[
                    {
                      icon: <Star className="h-12 w-12" />,
                      title: "Ongeëvenaarde Vakmanschap",
                      description: "Elk detail telt. Ons ervaren team zorgt ervoor dat uw boot er altijd op zijn best uitziet."
                    },
                    {
                      icon: <Shield className="h-12 w-12" />,
                      title: "Vertrouwd door Jachtbezitters",
                      description: "Word onderdeel van een gemeenschap van tevreden klanten die alleen de hoogste kwaliteit eisen."
                    },
                    {
                      icon: <Clock className="h-12 w-12" />,
                      title: "Snelle en Betrouwbare Service",
                      description: "Wij waarderen uw tijd. Reken op duidelijke communicatie, flexibele planning en efficiënte service."
                    },
                    {
                      icon: <DollarSign className="h-12 w-12" />,
                      title: "Bescherming van Uw Investering",
                      description: "Ons onderhoud behoudt de waarde van uw vaartuig en versterkt de esthetische aantrekkingskracht."
                    },
                    {
                      icon: <Heart className="h-12 w-12" />,
                      title: "Persoonlijke Aandacht",
                      description: "Op maat gemaakte oplossingen die inspelen op uw unieke behoeften – want uw boot is meer dan slechts een vaartuig; het is een levensstijl."
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#006039] transition-colors duration-300">
                        <div className="group-hover:text-white transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-[#006039]">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </FadeInSection>
          </section>

          <section aria-label="How It Works" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-white">
            <FadeInSection delay={0.2}>
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                  >
                    Een Eenvoudig Proces van Consultatie tot Afwerking
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8"
                >
                  {[
                    {
                      icon: <Phone className="h-12 w-12" />,
                      title: "Plan een Consultatie",
                      description: "Neem contact met ons op via telefoon of ons online formulier om een gratis, vrijblijvende consultatie in te plannen."
                    },
                    {
                      icon: <Search className="h-12 w-12" />,
                      title: "Expertise Evaluatie",
                      description: "Wij inspecteren uw boot om de specifieke behoeften te begrijpen en stellen een persoonlijk serviceplan op."
                    },
                    {
                      icon: <Wrench className="h-12 w-12" />,
                      title: "Premium Service Uitvoering",
                      description: "Onze technici werken met precisie en zorg, waarbij zij geavanceerde technieken toepassen om de glans van uw vaartuig te herstellen."
                    },
                    {
                      icon: <Ship className="h-12 w-12" />,
                      title: "Geniet van het Resultaat",
                      description: "Geniet van een boot die niet alleen prachtig oogt, maar ook optimaal beschermd is voor vele toekomstige tochten."
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group relative"
                    >
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#006039] text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#006039] transition-colors duration-300">
                        <div className="group-hover:text-white transition-colors duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-[#006039]">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </FadeInSection>
          </section>

          <section aria-label="About Us" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50">
            <FadeInSection delay={0.2}>
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                  >
                    Toegewijd aan Maritieme Perfectie
                  </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Bij ProShine combineren we jarenlange ervaring met een passie voor het behoud van de schoonheid
                      en prestaties van uw vaartuig. Ons team van experts zet zich in om uitsluitend de beste
                      producten en milieuvriendelijke technieken te gebruiken, zodat elke jacht, zeilboot of kleine
                      boot met de grootste zorg wordt behandeld.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Wij begrijpen dat uw boot zowel een investering als een statement van uw levensstijl is –
                      daarom zijn onze diensten ontworpen om de pracht ervan te behouden en de waarde te beschermen.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleContactClick}
                        className="w-full sm:w-auto bg-[#006039] text-[#FEFEFE] px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg group hover:bg-[#B3E9F2]"
                      >
                        <span className="font-medium">Plan Uw Gratis Consultatie</span>
                        <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      <motion.a
                        href="tel:+31642519677"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-[#006039] text-[#006039] px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center space-x-3 hover:border-[#B3E9F2] hover:text-[#B3E9F2]"
                      >
                        <Phone className="h-5 w-5" />
                        <span className="font-medium">Bel Ons Nu</span>
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src="/images/proshine_team.jpg"
                        alt="ProShine team aan het werk"
                        className="w-full h-[500px] object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <Star className="h-8 w-8 text-[#006039]" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#006039]">10+ Jaren</p>
                          <p className="text-gray-600">Maritieme Expertise</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
          </section>
        </article>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={galleryItems[currentImageIndex].before}
            alt={`Image ${currentImageIndex + 1}`}
            className="max-h-[80vh] max-w-[80vw] object-contain"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#A4C2C2] uppercase tracking-wider font-medium"
            >
              Getuigenissen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
            >
              Wat Onze Klanten Zeggen
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-4">
            {[
              {
                name: "Johan D., Amsterdam",
                text: "Ik heb mijn jacht nog nooit zo zien stralen. Hun oog voor detail en professionaliteit hebben al mijn verwachtingen overtroffen.",
                image: "src/images/Johan.jpg"
              },
              {
                name: "Marijke S., Rotterdam",
                text: "Van het eerste consult tot de uiteindelijke polish, het hele proces was vlekkeloos en echt premium. Ik vertrouw hen nu met al mijn bootonderhoud.",
                image: "src/images/Marijke.jpg"
              },
              {
                name: "Erik V., Den Haag",
                text: "Hun milieuvriendelijke aanpak en toewijding aan kwaliteit maken echt het verschil. Mijn boot heeft er nog nooit zo goed uitgezien.",
                image: "src/images/Erik.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#006039]">{testimonial.name}</h3>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#006039] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#A4C2C2] uppercase tracking-wider font-medium"
            >
              Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
            >
              Ons Werkproces
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Bekijk ons expertteam in actie terwijl zij boten in hun oude glorie herstellen.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch"> {/* Changed items-start to items-stretch */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex" // Added flex
            >
              <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"> {/* Set specific height */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cm40e1ChozE?si=P6AB6Evtjp9WAh6N"
                  title="Boat Cleaning Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            <div className="w-full md:w-1/2 flex flex-col justify-between"> {/* Changed from space-y-6 to flex and justify-between */}
              {[
                {
                  step: "Eerste Inspectie",
                  description: "Grondige inspectie van de staat van het vaartuig",
                  icon: <Search className="h-6 w-6" />
                },
                {
                  step: "Dieptereiniging",
                  description: "Verwijderen van vuil, zout en aanslag",
                  icon: <Droplet className="h-6 w-6" />
                },
                {
                  step: "Polijsten",
                  description: "Meerfase polijstproces voor maximale glans",
                  icon: <Sun className="h-6 w-6" />
                },
                {
                  step: "Bescherming",
                  description: "Aanbrengen van beschermende coating",
                  icon: <Shield className="h-6 w-6" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-4" // Added p-4 for more spacing
                >
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#006039] group-hover:bg-[#006039] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#006039] mb-2">{item.step}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#A4C2C2] uppercase tracking-wider font-medium"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
            >
              Laat Ons Uw Boot Transformeren
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#006039] mb-8">Neem Contact Op</h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  try {
                    const formData = new FormData(e.currentTarget);
                    await fetch('/', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
                    });
                    setSubmitStatus('success');
                    (e.target as HTMLFormElement).reset();
                  } catch {
                    setSubmitStatus('error');
                  }
                  setIsSubmitting(false);
                }}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Naam</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#006039] focus:border-transparent transition-all duration-300"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#006039] focus:border-transparent transition-all duration-300"
                        placeholder="uw@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Boot Type</label>
                    <input
                      name="boat-type"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#006039] focus:border-transparent transition-all duration-300"
                      placeholder="bijv. Sunseeker Manhattan 52"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Bericht</label>
                    <textarea
                      name="message"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#006039] focus:border-transparent transition-all duration-300"
                      rows={12} // Changed from rows={4} to rows={6}
                      placeholder="Vertel ons over uw wensen..."
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-[#006039] text-white px-8 py-4 rounded-lg hover:bg-[#B3E9F2] hover:text-[#006039] transition-all duration-300 flex items-center justify-center space-x-2
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="font-medium">{isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}</span>
                  {!isSubmitting && <ChevronRight className="w-5 h-5" />}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-50 text-green-600 rounded-lg flex items-center"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    Bericht succesvol verzonden!
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg flex items-center"
                  >
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Er ging iets mis. Probeer het opnieuw.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#006039] mb-4">Contact Informatie</h3>
                  <div className="space-y-4">
                    <motion.a
                      href="tel:+31642519677"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#006039] rounded-full flex items-center justify-center text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Telefoon</p>
                        <p className="text-lg font-medium text-[#006039]">+31 6 42519677</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="mailto:info@proshine.com"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#006039] rounded-full flex items-center justify-center text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-lg font-medium text-[#006039]">info@proshine.com</p>
                      </div>
                    </motion.a>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-[#006039] rounded-full flex items-center justify-center text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Locatie</p>
                        <p className="text-lg font-medium text-[#006039]">Amsterdam, Noord-Holland</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#006039] mb-4">Openingstijden</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maandag - Vrijdag</span>
                      <span className="text-[#006039] font-medium">8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zaterdag</span>
                      <span className="text-[#006039] font-medium">9:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zondag</span>
                      <span className="text-[#006039] font-medium">Gesloten</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-[#006039] mb-4">Service Gebied</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wij zijn actief in heel Noord-Holland en bedienen alle grote jachthavens in de regio,
                  waaronder Amsterdam, Zaandam, Alkmaar, en omstreken. Neem contact op voor de mogelijkheden
                  in uw gebied.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>

      {/* Mobile Logo */}
      <div className="block lg:hidden fixed top-0 left-0 z-50" style={{ position: 'fixed', top: 0, left: 0 }}>
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
      <header className="lg:hidden fixed top-4 w-full z-50">
        {/* ... existing header content ... */}
      </header>
    </div>
  );
}

// Section Animation Component
const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default App;
