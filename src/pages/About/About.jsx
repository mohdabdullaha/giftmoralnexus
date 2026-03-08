import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { content } from '../../data/content';
import { motion } from 'framer-motion';

const About = () => {
    const data = content.about;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="ABOUT US" />

            <main className="flex-grow py-16 px-6 flex items-center">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-14"
                    >
                        <h1 className="text-2xl md:text-4xl font-bold text-navy inline-block relative underline decoration-gold decoration-4 underline-offset-[-4px]">
                            ABOUT <span className="text-green">US</span>
                        </h1>
                    </motion.div>

                    <div className="space-y-8">
                        {data.content.map((text, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-ice border border-ice-border p-8 md:p-10 rounded-3xl shadow-sm text-center relative overflow-hidden group hover:shadow-lg transition-all"
                            >
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-navy/20 group-hover:bg-gold transition-colors" />

                                <p className="text-base md:text-lg text-navy/80 leading-relaxed font-serif italic font-medium">
                                    "{text}"
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-14 text-center text-xs font-black tracking-[0.25em] text-gray-400 uppercase"
                    >
                        {data.footer}
                    </motion.p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;