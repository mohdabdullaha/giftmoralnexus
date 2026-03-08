import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import NavGrid from '../../components/NavGrid';

import { content } from '../../data/content';
import { motion } from 'framer-motion';

const heroImg = '/img.jpg';

const RolePlay = () => {
    const data = content.roleplay;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="ROLE PLAY" />

            <main className="flex-grow">
                <section className="relative h-[50vh] overflow-hidden">
                    <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-5">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-white text-3xl md:text-5xl font-bold text-center tracking-wide uppercase"
                        >
                            {data.title}
                        </motion.h1>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <div className="max-w-4xl mx-auto text-left">
                        <h3 className="text-green text-3xl font-bold mb-8 uppercase text-center">Objective: {data.objective}</h3>

                        <div className="bg-ice border border-ice-border p-8 rounded-2xl shadow-sm my-10 border-r-8 border-r-navy">
                            <ul className="space-y-6">
                                {data.scenarios.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white p-5 rounded-xl shadow-sm border border-ice-border text-gray-700 text-lg leading-relaxed flex gap-4 items-center"
                                    >
                                        <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <AudioPlayer urduSrc={data.audios.urdu} englishSrc={data.audios.english} />
                    </div>

                    <NavGrid excludeId="roleplay" />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default RolePlay;
