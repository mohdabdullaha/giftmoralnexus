import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { content } from '../../data/content';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const data = content.contact;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="CONTACT" />

            <main className="flex-grow py-14 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Left Side: Contact Info */}
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-2xl md:text-4xl font-bold text-navy mb-5 leading-none"
                            >
                                GET <span className="text-green">IN TOUCH</span>
                                <div className="h-1.5 w-40 bg-gold mt-3 rounded-full" />
                            </motion.h1>

                            <p className="text-base text-gray-700 font-medium mb-10 max-w-lg">
                                {data.subtitle}
                            </p>

                            <div className="space-y-4">
                                {data.details.map((detail, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 bg-ice p-4 rounded-2xl border border-ice-border hover:shadow-md transition-all group"
                                    >
                                        <div className="bg-navy w-12 h-12 rounded-xl flex items-center justify-center text-white group-hover:bg-green transition-colors">
                                            {detail.icon === 'email' && <Mail size={20} />}
                                            {detail.icon === 'phone' && <Phone size={20} />}
                                            {detail.icon === 'location' && <MapPin size={20} />}
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-black text-navy/40 uppercase tracking-widest">
                                                {detail.label}
                                            </p>
                                            <p className="text-base font-bold text-navy group-hover:text-green transition-colors">
                                                {detail.value}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Inquiry Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white border border-ice-border rounded-3xl p-8 md:p-10 shadow-xl relative"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gold/5" />

                            {/* LEFT ALIGNED FORM HEADER */}
                            <div className="text-left mb-8 relative z-10">
                                <h2 className="text-xl font-bold text-navy mb-2 tracking-tight">
                                    {data.form.title}
                                </h2>
                                <p className="text-xs text-gray-400 font-serif italic">
                                    {data.form.subtitle}
                                </p>
                            </div>

                            <form className="space-y-6 relative z-10">
                                {data.form.fields.map((field, idx) => (
                                    <div key={idx} className="text-left">
                                        <label className="block text-[11px] font-semibold text-navy/60 mb-2 uppercase tracking-wide">
                                            {field}
                                        </label>

                                        {field === 'MESSAGE DESCRIPTION' ? (
                                            <textarea
                                                placeholder={`Enter your ${field.toLowerCase()}...`}
                                                className="w-full bg-ice border-none rounded-xl p-4 text-navy placeholder:text-navy/20 h-32 focus:ring-2 focus:ring-gold/30 transition-all outline-none"
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                placeholder={field === 'FULL NAME' ? "John Doe" : "john@gift.edu.pk"}
                                                className="w-full bg-ice border-none rounded-xl p-4 text-navy placeholder:text-navy/20 focus:ring-2 focus:ring-gold/30 transition-all outline-none"
                                            />
                                        )}
                                    </div>
                                ))}

                                <button className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-navy/20 transition-all active:scale-[0.98] uppercase tracking-widest">
                                    SEND MESSAGE 🚀
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;