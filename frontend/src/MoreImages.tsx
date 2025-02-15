import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MoreImages = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const galleryImages = [
        {
            before: "/images/before_blue.jpg",
            after: "/images/after_blue.jpg",
            title: "Luxury Yacht Restoration",
            description: "Complete transformatie van een klassieke yacht"
        },
        {
            before: "/images/before_dark_grey.jpg",
            after: "/images/after_dark_gray.jpg",
            title: "Sportboot Detailing",
            description: "Professionele reiniging en bescherming"
        },
        {
            before: "/images/before_gray.jpg",
            after: "/images/after_gray.jpg",
            title: "Premium Coating",
            description: "Langdurige bescherming met ceramic coating"
        },
        {
            before: "/images/before_white.jpg",
            after: "/images/after_white.jpg",
            title: "Hull Restoration",
            description: "Volledige romp renovatie en polijsten"
        },
        {
            before: "/images/gallery5-before.jpg",
            after: "/images/gallery5-after.jpg",
            title: "Interior Detailing",
            description: "Luxe interieur reiniging en verzorging"
        },
        {
            before: "/images/gallery6-before.jpg",
            after: "/images/gallery6-after.jpg",
            title: "Teak Deck Service",
            description: "Specialistische behandeling van teak dekken"
        }
    ];

    const videos = [
        {
            id: "video1",
            title: "Boot Polijsten",
            description: "Professioneel polijstproces van begin tot eind",
            url: "https://www.youtube.com/embed/v23WbszdoI8?si=eSP28diq8EarVxQr",
            modalUrl: "https://www.youtube.com/embed/v23WbszdoI8?si=eSP28diq8EarVxQr&autoplay=1"
        },
        {
            id: "video2",
            title: "Ceramic Coating",
            description: "Applicatie van premium ceramic coating",
            url: "https://www.youtube.com/embed/your-video-id-2",
            modalUrl: "https://www.youtube.com/embed/your-video-id-2?autoplay=1"
        },
        {
            id: "video3",
            title: "Interieur Detailing",
            description: "Gedetailleerd reinigingsproces van het interieur",
            url: "https://www.youtube.com/embed/your-video-id-3",
            modalUrl: "https://www.youtube.com/embed/your-video-id-3?autoplay=1"
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );
    };

    const handleVideoClick = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
    };

    return (
        <div className="min-h-screen bg-[#ffffff]">
            <nav>
                {/* Replace the existing header code with the shared Navbar */}
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
                                    Onze Projecten
                                </motion.span>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                                >
                                    Transformatie Galerij
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-600 max-w-2xl mx-auto text-lg"
                                >
                                    Bekijk onze meest indrukwekkende transformaties en restauraties
                                </motion.p>
                            </div>

                            {/* Gallery Grid */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {galleryImages.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="group cursor-pointer"
                                        onClick={() => handleImageClick(index)}
                                        layoutId={`gallery-image-${index}`}
                                    >
                                        <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                            {/* Change the aspect ratio here */}
                                            <div className="aspect-w-16 aspect-h-12"> {/* Changed from aspect-h-9 to aspect-h-12 */}
                                                <img
                                                    src={image.before}
                                                    alt={image.title}
                                                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3> {/* Changed from text-xl to text-lg */}
                                                    <p className="text-sm text-gray-200">{image.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Add this before the footer */}
            <section className="py-24 bg-gradient-to-b from-white to-green-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#A4C2C2] uppercase tracking-wider font-medium"
                        >
                            Video Galerij
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
                        >
                            Bekijk Ons in Actie
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-600 max-w-2xl mx-auto text-lg"
                        >
                            Ontdek onze werkprocessen en resultaten in detail
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                                layoutId={`video-container-${video.id}`}
                                onClick={() => handleVideoClick(video.modalUrl)}
                            >
                                <div className="aspect-w-16 aspect-h-14 relative"> {/* Changed from aspect-h-12 to aspect-h-14 */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                        <motion.div
                                            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <svg className="w-8 h-8 text-[#006039] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                    <iframe
                                        className="w-full h-full pointer-events-none"
                                        src={video.url}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[#006039] mb-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {video.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Process steps section remains the same */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8 mt-16"
                    >
                        {[
                            {
                                step: "1",
                                title: "Inspectie",
                                description: "Grondige analyse van de staat van uw boot"
                            },
                            {
                                step: "2",
                                title: "Behandeling",
                                description: "Professionele reiniging en behandeling"
                            },
                            {
                                step: "3",
                                title: "Resultaat",
                                description: "Perfecte afwerking en bescherming"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 bg-[#006039] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-semibold text-[#006039] mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-4 right-4 text-white p-2 hover:text-[#A4C2C2] transition-colors z-50"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation();
                                setIsModalOpen(false);
                            }}
                        >
                            <X size={24} />
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:text-[#A4C2C2] transition-colors"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                        >
                            <ChevronLeft size={40} />
                        </motion.button>
                        <motion.div
                            layoutId={`gallery-image-${currentImageIndex}`}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 200,
                                damping: 25
                            }}
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                            className="relative rounded-xl overflow-hidden"
                        >
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                src={galleryImages[currentImageIndex].before}
                                alt={galleryImages[currentImageIndex].title}
                                className="max-h-[80vh] max-w-[80vw] object-contain"
                            />
                        </motion.div>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:text-[#A4C2C2] transition-colors"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                        >
                            <ChevronRight size={40} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-4 right-4 text-white p-2 hover:text-[#A4C2C2] transition-colors z-50"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation();
                                setSelectedVideo(null);
                            }}
                        >
                            <X size={24} />
                        </motion.button>
                        <motion.div
                            layoutId={`video-container-${selectedVideo.split('?')[0]}`}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 200,
                                damping: 25
                            }}
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                            className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden"
                        >
                            <motion.iframe
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
                                src={selectedVideo}
                                title="Video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></motion.iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <footer>
                {/* Replace the existing footer code with the shared Footer */}
                <Footer />
            </footer>
        </div>
    );
};

export default MoreImages;