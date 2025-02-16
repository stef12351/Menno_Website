import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <nav>
                <Navbar />
            </nav>
            <main className="pt-16 pb-16">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-[#006039] text-center mb-8"
                    >
                        Terms of Service
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center text-gray-600 mb-12"
                    >
                        Effective Date: 16/02/2025
                    </motion.p>
                    <div className="space-y-8 text-gray-800">
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing and using Proshine Yachtcare (“we,” “our,” or “us”) website https://prosine.nl, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                2. Services Provided
                            </h2>
                            <p>
                                We provide yacht and boat polishing and washing services. The scope and availability of our services are subject to change at our discretion.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                3. User Responsibilities
                            </h2>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>You must be at least 18 years old to use our services.</li>
                                <li>You agree to provide accurate and complete information when booking a service.</li>
                                <li>You must not use our website for unlawful or prohibited activities.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                4. Booking and Payments
                            </h2>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Service appointments must be scheduled through our website or by contacting us directly.</li>
                                <li>Payment terms, including deposits and cancellations, will be outlined at the time of booking.</li>
                                <li>We reserve the right to cancel or refuse any booking at our discretion.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                5. Refund and Cancellation Policy
                            </h2>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Cancellations made within 8 hours of the scheduled service may be subject to a cancellation fee.</li>
                                <li>Refunds are only issued in accordance with our refund policy, available upon request.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                6. Limitation of Liability
                            </h2>
                            <p>
                                We are not responsible for:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Damage caused by pre-existing conditions on your vessel.</li>
                                <li>Delays due to weather, unforeseen circumstances, or third-party service providers.</li>
                                <li>Any indirect, incidental, or consequential damages arising from our services.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                7. Intellectual Property
                            </h2>
                            <p>
                                All content on our website, including text, images, and logos, is the property of Proshine Yachtcare and may not be used without permission.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                8. Third-Party Links
                            </h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for their content, policies, or practices.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                9. Modifications to Terms
                            </h2>
                            <p>
                                We reserve the right to update these Terms of Service at any time. Changes will be effective upon posting to our website.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                10. Contact Information
                            </h2>
                            <p>
                                For any questions regarding these Terms of Service, please contact us at:
                            </p>
                            <p className="mt-2">
                                Proshine Yachtcare<br />
                                info@proshine.nl<br />
                                Amsterdam<br />
                                +31 642519677
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Terms;