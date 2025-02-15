import { Ship, Shield, Clock, Phone, Mail, MapPin, Star, ChevronLeft, ChevronRight, Search, Droplet, Sun, Check, AlertCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
              {/* Add subtle parallax effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
              />
              {/* Add animated pattern overlay */}
              <div className="absolute inset-0 bg-[url('/patterns/subtle-dots.svg')] opacity-10"></div>
            </div>
            <div className="relative h-full container mx-auto px-8 flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}
                className="max-w-2xl text-white space-y-8"
              >
                <h1 className="text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-[#A4C2C2]">Excellence</span> in
                  <br />
                  Yacht Care
                </h1>
                {/* Add stylish subtitle */}
                <p className="text-xl text-gray-200 leading-relaxed font-light">
                  Ervaar het verschil van premium bootonderhoud door vakexperts.
                  <br />
                  <span className="text-[#A4C2C2] font-medium">Precisie. Passie. Perfectie.</span>
                </p>
                <div className="flex space-x-6 pt-4">
                  <Link to="/services">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#A4C2C2] text-[#006039] px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-3 shadow-lg"
                    >
                      <span className="font-medium">Ontdek Onze Services</span>
                      <Ship className="h-5 w-5" />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContactClick}  // Add this onClick handler
                    className="border-2 border-[#A4C2C2] text-[#A4C2C2] px-8 py-4 rounded-full transition-all duration-300"
                  >
                    <span className="font-medium">Contact</span>
                  </motion.button>
                </div>
              </motion.div>
              {/* Add floating stats */}
              <div className="absolute bottom-20 right-20 grid grid-cols-3 gap-8">
                {[
                  { number: "500+", label: "Tevreden Klanten" },
                  { number: "10+", label: "Jaren Ervaring" },
                  { number: "100%", label: "Garantie" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center"
                  >
                    <div className="text-[#A4C2C2] text-3xl font-bold">{stat.number}</div>
                    <div className="text-white text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section aria-label="Services" id="services" className="py-24 bg-gradient-to-b from-green-50 to-white">
            <FadeInSection delay={0.2}>
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[#A4C2C2] uppercase tracking-wider font-medium"
                  >
                    Onze Expertise
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                  >
                    Onze Diensten
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 max-w-2xl mx-auto text-lg"
                  >
                    Ontdek onze premium diensten voor het ultieme yacht care experience
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid md:grid-cols-3 gap-8 px-4 md:px-8"
                >
                  {[
                    {
                      icon: <Ship className="h-12 w-12 text-[#006039]" />,
                      title: "Complete Boot Detailing",
                      description: "Van romp tot dek, wij zorgen voor een complete transformatie",
                      features: ["Exterieur reiniging", "Interior detailing", "Anti-fouling", "Wax behandeling"]
                    },
                    {
                      icon: <Shield className="h-12 w-12 text-[#006039]" />,
                      title: "Bescherming & Onderhoud",
                      description: "Langdurige bescherming tegen weer en water",
                      features: ["Ceramic coating", "UV bescherming", "Gelcoat herstel", "Antislip behandeling"]
                    },
                    {
                      icon: <Clock className="h-12 w-12 text-[#006039]" />,
                      title: "Periodiek Onderhoud",
                      description: "Regelmatig onderhoud voor een blijvende glans",
                      features: ["Seizoen voorbereiding", "Maandelijks onderhoud", "Inspectie service", "Winter stalling"]
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
                      onClick={() => navigate('/services')}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col"
                    >
                      <div className="p-8 flex-grow">
                        <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#006039] transition-colors duration-300">
                          <div className="group-hover:text-white transition-colors duration-300">
                            {service.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-[#006039]">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <svg className="w-4 h-4 mr-3 text-[#006039]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 mt-auto">
                        <button className="text-[#006039] font-medium flex items-center group-hover:text-[#004c2d]">
                          Meer Info
                          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </FadeInSection>
          </section>

          <section aria-label="Portfolio" className="py-32 bg-gradient-to-b from-white to-green-50">
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
                  className="inline-flex items-center px-8 py-4 bg-[#006039] text-white rounded-full hover:bg-[#004c2d] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="font-medium">Bekijk Meer Projecten</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
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

      {/* Trust Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#A4C2C2] uppercase tracking-wider font-medium"
            >
              Testimonials
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
                name: "Jan D.",
                yacht: "Sunseeker Manhattan 52",
                rating: 5,
                text: "Uitzonderlijke service! Mijn boot ziet er beter uit dan toen hij nieuw was.",
                image: "/images/testimonial1.jpg"
              },
              {
                name: "Sara M.",
                yacht: "Princess 55",
                rating: 5,
                text: "Professioneel team, geweldige resultaten. Zeer aan te bevelen!",
                image: "/images/testimonial2.jpg"
              },
              {
                name: "Robert K.",
                yacht: "Azimut 68",
                rating: 5,
                text: "De aandacht voor detail is uitstekend. Elke euro waard.",
                image: "/images/testimonial3.jpg"
              },
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
                    <p className="text-sm text-gray-500">{testimonial.yacht}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
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
      <section className="py-32 bg-[#ffffff]">
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
      <section id="contact" className="py-32 bg-gradient-to-b from-white to-green-50">
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
                  className={`w-full bg-[#006039] text-white px-8 py-4 rounded-lg hover:bg-[#004c2d] transition-all duration-300 flex items-center justify-center space-x-2
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
