import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import NavGrid from '../../components/NavGrid';
import { content } from '../../data/content';
import { motion } from 'framer-motion';

const heroImg = '/img.jpg'; // same as Sunnah page

const RazEHayat = () => {
    const data = content.razehayat;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="RAZ-E-HAYAT" />

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
                    <h2 className="text-3xl font-bold text-navy mb-4">
                        چوٹی کے لوگ
                    </h2>

                    {/* Paragraphs */}
                    {data.paragraphs?.map((para, idx) => (
                        <p key={idx} className="text-lg text-gray-700 leading-relaxed">
                            {para}
                        </p>
                    ))}

                    {/* Quote */}
                    {data.quote && (
                        <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-xl my-10">
                            <p className="italic text-lg text-gray-800 text-center">{data.quote}</p>
                        </div>
                    )}

                    {/* AUDIO PLAYER */}
                    {data.audios?.urdu && (
                        <div className="text-center my-12">
                            <AudioPlayer urduSrc={data.audios.urdu} buttonLabel="Listen" />
                        </div>
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