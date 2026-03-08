import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import NavGrid from '../../components/NavGrid';
import { content } from '../../data/content';
import { motion } from 'framer-motion';

const heroImg = '/img.jpg';

const Pledge = () => {
    const data = content.pledge;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="PLEDGE" />

            <main className="flex-grow">
                {/* Hero Section */}
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

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <div className="max-w-4xl mx-auto text-left">
                        <h3 className="text-green text-3xl font-bold mb-8 uppercase text-center">
                            Objective: {data.objective}
                        </h3>

                        <div className="bg-navy text-white p-12 rounded-[2rem] shadow-2xl my-10 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gold/5 transform skew-y-12 translate-y-20 group-hover:translate-y-10 transition-transform duration-1000" />

                            <p className="text-xl md:text-2xl font-medium mb-8 relative z-10">
                                {data.text}
                            </p>

                            <div className="p-1 border-2 border-gold/30 rounded-2xl relative z-10">
                                <div className="bg-white/5 backdrop-blur-sm p-10 rounded-xl border border-gold/50">
                                    <p className="text-2xl md:text-4xl font-bold italic text-gold leading-tight">
                                        {data.pledge}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-10 text-lg font-semibold text-gold/80 relative z-10 uppercase tracking-widest italic">
                                {data.footer}
                            </p>
                        </div>

                        <AudioPlayer
                            urduSrc={data.audios.urdu}
                            englishSrc={data.audios.english}
                        />
                    </div>

                    <NavGrid excludeId="pledge" />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Pledge;