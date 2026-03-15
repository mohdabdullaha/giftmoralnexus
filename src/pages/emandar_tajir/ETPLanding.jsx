import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import NavGrid from '../../components/NavGrid';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading';
import { content } from '../../data/content';

const heroImg = '/img.jpg';

const ETPLanding = () => {
    const data = content.etp;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Emandar Tajir Program" />

            <main className="flex-grow">
                {/* Hero */}
                <section className="relative h-[60vh] overflow-hidden">
                    <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-5">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-center"
                        >
                            <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide mb-4">
                                {data.title}
                            </h1>
                            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                                {data.subtitle}
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <SectionHeading>Emandar <span className="text-green">Tājir</span> Program</SectionHeading>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-700 mt-6"
                        >
                            {data.intro}
                        </motion.p>
                    </div>

                    <NavGrid section="etp" />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ETPLanding;
