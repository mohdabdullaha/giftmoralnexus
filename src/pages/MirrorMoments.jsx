import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';
import NavGrid from '../components/NavGrid';

import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { content } from '../data/content';

const heroImg = '/img.jpg';

const MirrorMoments = () => {
    const data = content.mirror;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Mirror Moments" />

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
                        <SectionHeading>Mirror <span className="text-green">Moments</span></SectionHeading>

                        <h3 className="text-green text-2xl font-bold mb-8 text-center text-navy tracking-tight underline decoration-gold/50 underline-offset-8 italic">Objective: {data.objective}</h3>

                        <div className="bg-ice border border-ice-border p-8 rounded-2xl shadow-sm my-10 text-center">
                            <p className="text-3xl font-medium mb-6 text-navy">{data.text}</p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                {data.prompts.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white p-6 rounded-2xl shadow-sm border-2 border-dashed border-green/30 flex-1 text-gray-700 text-xl italic"
                                    >
                                        "{item}"
                                    </motion.div>
                                ))}
                            </div>
                            <p className="mt-8 text-sm text-gray-500 font-medium bg-white/50 py-2 rounded-full inline-block px-6">
                                {data.footer}
                            </p>
                        </div>

                        <AudioPlayer urduSrc={data.audios.urdu} englishSrc={data.audios.english} />
                    </div>

                    <NavGrid excludeId="mirror" />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MirrorMoments;
