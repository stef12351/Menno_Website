import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Privacy: React.FC = () => {
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
                        Privacy Policy
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
                                1. Introduction
                            </h2>
                            <p>
                                Welcome to Proshine Yachtcare ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://proshine.nl.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                2. Information We Collect
                            </h2>
                            <p>We may collect the following types of information:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>
                                    <strong>Personal Information:</strong> Name, email address, phone number, and any other details you provide through contact forms or service requests.
                                </li>
                                <li>
                                    <strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, and other analytics data.
                                </li>
                                <li>
                                    <strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance user experience and track website activity.
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                3. How We Use Your Information
                            </h2>
                            <p>We use the collected data for:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Providing and managing our yacht and boat services.</li>
                                <li>Responding to inquiries and customer support requests.</li>
                                <li>Improving our website and services.</li>
                                <li>Marketing and promotional activities (with your consent).</li>
                                <li>Legal compliance and fraud prevention.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                4. Sharing Your Information
                            </h2>
                            <p>
                                We do not sell or rent your personal information. However, we may share your data with:
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Service providers assisting in website operation and customer service.</li>
                                <li>Legal authorities if required by law.</li>
                                <li>Third-party analytics providers for website performance tracking.</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                5. Data Security
                            </h2>
                            <p>
                                We implement security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                6. Your Rights and Choices
                            </h2>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>
                                    <strong>Opt-Out:</strong> You can opt out of marketing emails by following the unsubscribe link.
                                </li>
                                <li>
                                    <strong>Access & Correction:</strong> You may request access to or correction of your personal data.
                                </li>
                                <li>
                                    <strong>Cookies Management:</strong> You can modify your browser settings to control cookie usage.
                                </li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                7. Third-Party Links
                            </h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                8. Changes to This Policy
                            </h2>
                            <p>
                                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-[#006039] mb-4">
                                9. Contact Us
                            </h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-2">
                                Proshine Yachtcare
                                <br />
                                info@proshine.nl
                                <br />
                                Amsterdam
                                <br />
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

export default Privacy;