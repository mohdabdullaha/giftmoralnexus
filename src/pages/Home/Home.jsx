import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { content } from '../../data/content';
import { motion } from 'framer-motion';
import NavGrid from '../../components/NavGrid';

const defaultImg = '/img.jpg';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar pageTitle="HOME" />

            <main className="flex-grow">
                {/* Hero Slider */}
                <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
                    <img
                        src={defaultImg}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black/30 px-5">
                        <motion.h1
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="text-white text-3xl md:text-5xl font-bold tracking-widest text-shadow-lg text-center drop-shadow-2xl"
                        >
                            {content.home.title}
                        </motion.h1>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <p className="text-lg leading-relaxed text-gray-700">
                            {content.home.welcome}
                        </p>
                    </motion.div>

                    <NavGrid />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
