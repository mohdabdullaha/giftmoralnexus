import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { content } from '../../data/content';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
    const data = content.purpose;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-ice">
            <Navbar pageTitle="VISION & MISSION" />

            <main className="flex-grow py-14 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-2xl md:text-4xl font-bold text-navy mb-4 tracking-tight">
                            {data.title}
                        </h1>
                        <div className="h-1.5 w-20 bg-gold mx-auto rounded-full" />
                    </motion.div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Vision Card */}
                        <motion.div
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-ice-border flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="bg-navy p-4 rounded-2xl mb-6 shadow-md">
                                <Eye size={36} className="text-white" />
                            </div>

                            <h2 className="text-xl font-bold text-navy mb-4 underline underline-offset-8 decoration-gold decoration-4">
                                {data.vision.title}
                            </h2>

                            <p className="text-base text-gray-700 leading-relaxed italic">
                                "{data.vision.text}"
                            </p>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ x: 40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-ice-border flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="bg-green p-4 rounded-2xl mb-6 shadow-md">
                                <Target size={36} className="text-white" />
                            </div>

                            <h2 className="text-xl font-bold text-green mb-4 underline underline-offset-8 decoration-gold decoration-4">
                                {data.mission.title}
                            </h2>

                            <p className="text-base text-gray-700 leading-relaxed italic">
                                "{data.mission.text}"
                            </p>
                        </motion.div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VisionMission;