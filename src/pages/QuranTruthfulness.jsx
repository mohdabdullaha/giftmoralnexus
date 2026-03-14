import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';
import VerseCard from '../components/VerseCard';
import NavGrid from '../components/NavGrid';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { content } from '../data/content';

const heroImg = '/img.jpg';

const QuranTruthfulness = () => {
    const data = content.quran;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Quran" />

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
                    <div className="max-w-4xl mx-auto space-y-12">

                        <SectionHeading>The Divine Wisdom on <span className="text-green">Truthfulness</span></SectionHeading>

                        <div className="my-10">
                            <h3 className="text-green text-3xl font-bold mb-8">Key Verses</h3>
                            {data.verses.map(verse => (
                                <VerseCard key={verse.id} verse={verse} />
                            ))}
                        </div>

                        <AudioPlayer urduSrc={data.audios.urdu} englishSrc={data.audios.english} />
                    </div>

                    <NavGrid excludeId="quran" />
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default QuranTruthfulness;
