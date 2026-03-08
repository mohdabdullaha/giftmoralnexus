import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { content } from '../../data/content';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Infographics = () => {
    const data = content.infographics;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="INFOGRAPHICS" />

            <main className="flex-grow py-14 px-6">
                <div className="max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-2xl md:text-4xl font-bold text-navy mb-3 inline-block relative">
                            MORAL <span className="text-green">INFOGRAPHICS</span>
                            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gold rounded-full opacity-70" />
                        </h1>

                        <p className="text-base text-gray-700 mt-6 italic font-medium max-w-xl mx-auto">
                            "{data.subtitle}"
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {data.pdfs.map((pdf, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white border border-ice-border rounded-3xl p-7 shadow-lg flex flex-col hover:shadow-navy/10 transition-shadow group"
                            >

                                <div className="bg-ice w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
                                    <FileText className="text-navy group-hover:text-white transition-colors" size={24} />
                                </div>

                                <h3 className="text-lg font-bold text-navy mb-2 uppercase tracking-tight">
                                    {pdf.title}
                                </h3>

                                <p className="text-sm text-gray-500 italic mb-8 flex-grow">
                                    {pdf.desc}
                                </p>

                                <a
                                    href={pdf.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold py-3 rounded-xl shadow-md transition-all active:scale-95 group"
                                >
                                    <Download size={18} />
                                    VIEW PDF
                                </a>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Infographics;