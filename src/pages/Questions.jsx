import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';
import NavGrid from '../components/NavGrid';

import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { content } from '../data/content';

const heroImg = '/img.jpg';

const Questions = () => {
    const data = content.questions;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Questions" />

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
                        <SectionHeading>Reflective <span className="text-green">Assessment</span></SectionHeading>

                        <div className="bg-ice border border-ice-border p-8 rounded-2xl shadow-sm my-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 rounded-full -mr-16 -mt-16" />
                            <h3 className="text-green text-3xl font-bold mb-8">Reflective Questions</h3>
                            <ul className="space-y-6">
                                {data.list.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-4 items-start text-gray-700 text-lg leading-relaxed"
                                    >
                                        <span className="bg-navy text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold mt-1 text-sm">{idx + 1}</span>
                                        <span className="text-2xl">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <AudioPlayer urduSrc={data.audios.urdu} englishSrc={data.audios.english} />
                    </div>

                    <NavGrid excludeId="questions" />
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default Questions;
