import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AudioPlayer from '../../components/AudioPlayer';
import NavGrid from '../../components/NavGrid';

import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading';
import { content } from '../../data/content';

const heroImg = '/img.jpg';

const SunnahTruthfulness = () => {
    const data = content.sunnah;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Sunnah" />

            <main className="flex-grow">
                <section className="relative h-[50vh] overflow-hidden">
                    <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-5">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-white text-3xl md:text-5xl font-bold text-center tracking-wide"
                        >
                            {data.title}
                        </motion.h1>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeading>Prophetic Guidance on <span className="text-green">Truthfulness</span></SectionHeading>

                        <div className="space-y-8 my-10">
                            {data.insights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.01 }}
                                    className="bg-ice border border-ice-border p-8 rounded-2xl shadow-sm text-left relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-full bg-green group-hover:w-3 transition-all" />
                                    <h4 className="text-navy font-bold text-xl mb-3">{item.title}</h4>
                                    <p className="text-gray-700 text-2xl italic mb-4">"{item.text}"</p>
                                    <p className="text-right text-navy/60 font-medium">{item.ref}</p>
                                </motion.div>
                            ))}
                        </div>

                        <AudioPlayer urduSrc={data.audios.urdu} englishSrc={data.audios.english} />
                    </div>

                    <NavGrid excludeId="sunnah" section="cardinalVirtues" />
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default SunnahTruthfulness;
