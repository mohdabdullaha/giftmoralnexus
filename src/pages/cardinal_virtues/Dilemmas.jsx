import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AudioPlayer from '../../components/AudioPlayer';
import NavGrid from '../../components/NavGrid';

import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading';
import { content } from '../../data/content';

const heroImg = '/img.jpg';

const Dilemmas = () => {
    const data = content.dilemmas;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Dilemmas" />

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
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading>Ethical <span className="text-green">Dilemmas</span></SectionHeading>

                        <div className="bg-ice border border-ice-border p-8 rounded-2xl shadow-sm my-10 border-t-8 border-t-green">
                            <ul className="space-y-6">
                                {data.scenarios.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white p-5 rounded-xl shadow-sm border border-ice-border text-gray-700 text-2xl leading-relaxed list-disc list-inside marker:text-green marker:text-2xl"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <AudioPlayer urduSrc={data.audios.urdu} englishSrc={data.audios.english} />
                    </div>

                    <NavGrid excludeId="dilemmas" section="cardinalVirtues" />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Dilemmas;
