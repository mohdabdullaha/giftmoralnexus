import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import NavGrid from '../components/NavGrid';
import { Mail, Phone, MapPin, Eye, Target } from 'lucide-react';

const defaultImg = '/img.jpg';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar pageTitle="Home" />

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
                        <p className="text-2xl leading-relaxed text-gray-700">
                            {content.home.welcome}
                        </p>
                    </motion.div>

                    {/* Vision & Mission Section */}
                    <section className="max-w-7xl mx-auto px-6 py-20 bg-ice/30 rounded-3xl mb-12 text-left">
                        <SectionHeading>Our <span className="text-green">Purpose</span></SectionHeading>


                        <div className="grid md:grid-cols-2 gap-10">
                            <motion.div
                                initial={{ x: -40, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-ice-border flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="bg-navy p-4 rounded-2xl mb-6 shadow-md">
                                    <Eye size={36} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4 underline underline-offset-8 decoration-gold decoration-4">
                                    {content.purpose.vision.title}
                                </h3>
                                <p className="text-base text-gray-700 leading-relaxed italic">
                                    "{content.purpose.vision.text}"
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ x: 40, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-ice-border flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="bg-green p-4 rounded-2xl mb-6 shadow-md">
                                    <Target size={36} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-green mb-4 underline underline-offset-8 decoration-gold decoration-4">
                                    {content.purpose.mission.title}
                                </h3>
                                <p className="text-base text-gray-700 leading-relaxed italic">
                                    "{content.purpose.mission.text}"
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* About Us Section */}
                    <section className="max-w-4xl mx-auto py-20 px-6">
                        <SectionHeading>About <span className="text-green">Us</span></SectionHeading>


                        <div className="space-y-8 text-left">
                            {content.about.content.map((text, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="bg-ice/50 border border-ice-border p-8 md:p-10 rounded-3xl shadow-sm text-center relative overflow-hidden group hover:shadow-lg transition-all"
                                >
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-navy/20 group-hover:bg-gold transition-colors" />
                                    <p className="text-xl md:text-2xl text-navy/80 leading-relaxed font-serif italic font-medium">
                                        "{text}"
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <NavGrid />

                    {/* Contact Section */}
                    <section className="max-w-7xl mx-auto py-20 px-6 bg-navy/5 rounded-3xl mt-12 text-left">
                        <div className="grid lg:grid-cols-2 gap-12 items-start text-left">
                            <div>
                                <SectionHeading centered={false}>Get In <span className="text-green">Touch</span></SectionHeading>


                                <p className="text-xl text-gray-700 font-medium mb-10 max-w-lg">
                                    {content.contact.subtitle}
                                </p>

                                <div className="space-y-4">
                                    {content.contact.details.map((detail, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-ice-border hover:shadow-md transition-all group"
                                        >
                                            <div className="bg-navy w-12 h-12 rounded-xl flex items-center justify-center text-white group-hover:bg-green transition-colors">
                                                {detail.icon === 'email' && <Mail size={20} />}
                                                {detail.icon === 'phone' && <Phone size={20} />}
                                                {detail.icon === 'location' && <MapPin size={20} />}
                                            </div>

                                            <div>
                                                <p className="text-xs font-black text-navy/40 tracking-widest">
                                                    {detail.label}
                                                </p>
                                                <p className="text-xl font-bold text-navy group-hover:text-green transition-colors">
                                                    {detail.value}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-ice-border rounded-3xl p-8 md:p-10 shadow-xl relative"
                            >
                                <div className="text-left mb-8 relative z-10">
                                    <h2 className="text-xl font-bold text-navy mb-2 tracking-tight">
                                        {content.contact.form.title}
                                    </h2>
                                    <p className="text-xs text-gray-400 font-serif italic">
                                        {content.contact.form.subtitle}
                                    </p>
                                </div>

                                <form className="space-y-6 relative z-10">
                                    {content.contact.form.fields.map((field, idx) => (
                                        <div key={idx} className="text-left">
                                            <label className="block text-[11px] font-semibold text-navy/60 mb-2 tracking-wide">
                                                {field}
                                            </label>

                                            {field === 'Message Description' ? (
                                                <textarea
                                                    placeholder={`Enter your ${field.toLowerCase()}...`}
                                                    className="w-full bg-ice border-none rounded-xl p-4 text-navy placeholder:text-navy/20 h-32 focus:ring-2 focus:ring-gold/30 transition-all outline-none"
                                                />
                                            ) : (
                                                <input
                                                    type="text"
                                                    placeholder={field === 'Full Name' ? "John Doe" : "john@gift.edu.pk"}
                                                    className="w-full bg-ice border-none rounded-xl p-4 text-navy placeholder:text-navy/20 focus:ring-2 focus:ring-gold/30 transition-all outline-none"
                                                />
                                            )}
                                        </div>
                                    ))}

                                    <button className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-navy/20 transition-all active:scale-[0.98] tracking-widest">
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </section>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;