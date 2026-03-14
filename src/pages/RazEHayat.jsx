import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';
import NavGrid from '../components/NavGrid';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { content } from '../data/content';

const heroImg = '/img.jpg'; // same as Sunnah page

const RazEHayat = () => {
    const data = content.razehayat;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Raz-e-Hayat" />

            {/* HERO SECTION */}
            <section className="relative h-[50vh] overflow-hidden">
                <img src={heroImg} alt="Raz-e-Hayat" className="w-full h-full object-cover" />
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

            {/* MAIN CONTENT */}
            <main className="flex-grow max-w-7xl mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto text-right space-y-6">

                    {/* Heading */}
                    <div className="flex justify-end mb-8">
                        <SectionHeading centered={false}>چوٹی کے لوگ</SectionHeading>
                    </div>

                    <div className="font-urdu">
                        {data.paragraphs?.map((para, idx) => (
                            <p key={idx} className="text-2xl text-gray-700 leading-relaxed font-urdu mb-8">
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Quote */}
                    {data.quote && (
                        <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-xl my-10">
                            <p className="italic text-2xl text-gray-800 text-center">{data.quote}</p>
                        </div>
                    )}

                    {/* AUDIO PLAYER */}
                    {data.audios?.urdu && (
                        <AudioPlayer urduSrc={data.audios.urdu} />
                    )}

                </div>

                {/* EXPLORE MORE SECTION */}
                <div className="mt-20">
                    <NavGrid excludeId="razehayat" />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RazEHayat;