import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';
import NavGrid from '../components/NavGrid';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { content } from '../data/content';

const heroImg = '/img.jpg';

const Truthfulness = () => {
    const data = content.truthfulness;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Cardinal Virtue" />

            <main className="flex-grow">
                {/* Hero */}
                <section className="relative h-[60vh] overflow-hidden">
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

                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto text-left space-y-8">
                        <SectionHeading centered={false}>The Significance of <span className="text-green">Truthfulness</span></SectionHeading>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-700"
                        >
                            {data.intro}
                        </motion.p>



                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-700"
                        >
                            {data.body}
                        </motion.p>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-ice border border-ice-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-green text-2xl font-bold mb-4">{data.benefits.title}</h3>
                                <p className="text-gray-700 text-xl leading-relaxed">{data.benefits.text}</p>
                            </motion.div>

                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-ice border border-ice-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-navy text-2xl font-bold mb-4">{data.consequences.title}</h3>
                                <p className="text-gray-700 text-xl leading-relaxed">{data.consequences.text}</p>
                            </motion.div>
                        </div>
                        <AudioPlayer urduSrc={data.audios.urdu} englishSrc={data.audios.english} />
                    </div>

                    <NavGrid excludeId="truthfulness" />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Truthfulness;
