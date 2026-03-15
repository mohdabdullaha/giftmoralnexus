import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import NavGrid from '../../components/NavGrid';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading';
import { content } from '../../data/content';
import { CheckCircle, AlertTriangle, BookOpen, Users, BarChart3, Award, Shield, ClipboardList } from 'lucide-react';

const heroImg = '/img.jpg';

const ETPToRs = () => {
    const data = content.etpTors;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar pageTitle="Emandar Tajir Program" />

            <main className="flex-grow">
                {/* Hero */}
                <section className="relative h-[50vh] overflow-hidden">
                    <img src={heroImg} alt="ETP ToRs" className="w-full h-full object-cover" />
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

                <section className="max-w-7xl mx-auto px-6 py-16 space-y-16 text-left">

                    {/* 1. Program Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <SectionHeading>{data.programTitle.heading}</SectionHeading>
                        <h3 className="text-2xl font-bold text-navy mt-4">{data.programTitle.name}</h3>
                        <p className="text-lg text-gray-600 italic mt-2">{data.programTitle.tagline}</p>
                    </motion.div>

                    {/* 2. Background & Rationale */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            <span className="text-green">{data.background.heading}</span>
                        </SectionHeading>
                        {data.background.text.split('\n\n').map((p, i) => (
                            <p key={i} className="text-xl text-gray-700 leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                    </motion.div>

                    {/* 3. Program Objectives */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Program <span className="text-green">Objectives</span>
                        </SectionHeading>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            {data.objectives.list.map((obj, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 bg-ice border border-ice-border p-5 rounded-2xl"
                                >
                                    <CheckCircle className="text-green shrink-0 mt-1" size={22} />
                                    <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: obj }} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. Scope of Work */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Scope of <span className="text-green">Work</span>
                        </SectionHeading>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            {data.scope.sections.map((sec, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-ice-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h4 className="text-xl font-bold text-navy mb-3">{sec.title}</h4>
                                    <ul className="space-y-2">
                                        {sec.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-lg text-gray-700">
                                                <span className="text-gold mt-1.5 font-bold">•</span>
                                                <span dangerouslySetInnerHTML={{ __html: item }} />
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 5. Linkage with Degree Programs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Linkage with <span className="text-green">Degree Programs</span>
                        </SectionHeading>
                        <div className="space-y-4 mt-4">
                            {data.linkage.paragraphs.map((p, idx) => (
                                <p key={idx} className="text-xl text-gray-700 leading-relaxed">{p}</p>
                            ))}
                        </div>
                    </motion.div>

                    {/* 6. Ethical Guidelines */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Ethical <span className="text-green">Guidelines</span>
                        </SectionHeading>
                        <p className="text-xl text-gray-700 leading-relaxed mt-4 mb-6">{data.ethicalGuidelines.intro}</p>
                        <div className="space-y-4">
                            {data.ethicalGuidelines.rules.map((rule, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 bg-ice/50 border border-ice-border p-5 rounded-2xl"
                                >
                                    <span className="bg-navy text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">{idx + 1}</span>
                                    <p className="text-lg text-gray-700">{rule}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Disclaimers */}
                        <div className="mt-8 bg-red-50 border border-red-200 p-6 rounded-2xl">
                            <h4 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
                                <AlertTriangle size={20} /> Disclaimer
                            </h4>
                            <ul className="space-y-2">
                                {data.ethicalGuidelines.disclaimers.map((d, idx) => (
                                    <li key={idx} className="text-base text-red-800 flex items-start gap-2">
                                        <span className="font-bold">•</span> {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* 6.1 Score Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Ethics <span className="text-green">Score Card</span>
                        </SectionHeading>
                        <p className="text-lg text-gray-700 mt-4 mb-6">{data.scoreCard.intro}</p>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
                                <thead>
                                    <tr className="bg-navy text-white">
                                        <th className="p-4 text-left text-sm font-bold">Sr.</th>
                                        <th className="p-4 text-left text-sm font-bold">Category</th>
                                        <th className="p-4 text-left text-sm font-bold">Key Indicators</th>
                                        <th className="p-4 text-center text-sm font-bold">Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.scoreCard.categories.map((cat, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-ice/30' : 'bg-white'}>
                                            <td className="p-4 font-bold text-navy">{idx + 1}</td>
                                            <td className="p-4 font-semibold text-navy">{cat.name}</td>
                                            <td className="p-4 text-gray-700">
                                                <ul className="space-y-1">
                                                    {cat.indicators.map((ind, i) => (
                                                        <li key={i} className="flex items-center gap-1.5 text-sm">
                                                            <span className="text-gold">•</span> {ind}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="p-4 text-center font-bold text-green">{cat.weight}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gold/10 border-l-4 border-gold p-5 rounded-xl mt-6 text-center">
                            <p className="text-base text-gray-700 italic">{data.scoreCard.spiritualNote}</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-3 italic">{data.scoreCard.note}</p>
                    </motion.div>

                    {/* 6.2 Ethical Compliance */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Ethical <span className="text-green">Compliance</span>
                        </SectionHeading>
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            {data.ethicalCompliance.items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-ice border border-ice-border p-4 rounded-2xl">
                                    <Shield className="text-navy shrink-0 mt-0.5" size={20} />
                                    <p className="text-lg text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 7. Expected Outputs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Expected <span className="text-green">Outputs</span>
                        </SectionHeading>
                        <div className="space-y-3 mt-6">
                            {data.outputs.list.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white border border-ice-border p-4 rounded-2xl shadow-sm">
                                    <Award className="text-gold shrink-0 mt-0.5" size={20} />
                                    <p className="text-lg text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 8. KPIs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Key Performance <span className="text-green">Indicators</span>
                        </SectionHeading>
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            {data.kpis.list.map((kpi, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-ice border border-ice-border p-4 rounded-2xl">
                                    <BarChart3 className="text-green shrink-0 mt-0.5" size={20} />
                                    <p className="text-lg text-gray-700">{kpi}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 9. Program Management */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <SectionHeading>
                            Program <span className="text-green">Management Team</span>
                        </SectionHeading>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            {data.management.roles.map((role, idx) => (
                                <div key={idx} className="bg-navy text-white p-5 rounded-2xl text-center shadow-lg">
                                    <Users className="mx-auto mb-2" size={28} />
                                    <p className="font-bold text-lg">{role}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 10. Roles & Responsibilities */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Roles & <span className="text-green">Responsibilities</span>
                        </SectionHeading>
                        <div className="space-y-4 mt-6">
                            {data.responsibilities.sections.map((sec, idx) => (
                                <div key={idx} className="bg-white border border-ice-border p-6 rounded-2xl shadow-sm">
                                    <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                                        <ClipboardList className="text-gold" size={22} /> {sec.role}
                                    </h4>
                                    <ul className="space-y-2">
                                        {sec.duties.map((duty, i) => (
                                            <li key={i} className="flex items-start gap-2 text-lg text-gray-700">
                                                <span className="text-gold mt-1 font-bold">•</span> {duty}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 11. Reporting */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading centered={false}>
                            Reporting <span className="text-green">Requirements</span>
                        </SectionHeading>
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            {data.reporting.items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-ice border border-ice-border p-4 rounded-2xl">
                                    <BookOpen className="text-navy shrink-0 mt-0.5" size={20} />
                                    <p className="text-lg text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 12. Budget */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-ice border border-ice-border p-8 rounded-2xl text-center"
                    >
                        <SectionHeading>
                            Budget & <span className="text-green">Resource Allocation</span>
                        </SectionHeading>
                        <p className="text-xl text-gray-700 leading-relaxed mt-4">{data.budget.text}</p>
                    </motion.div>

                    {/* 13. Review */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gold/10 border-l-4 border-gold p-6 rounded-xl text-center"
                    >
                        <h3 className="text-xl font-bold text-navy mb-3">{data.review.heading}</h3>
                        <p className="text-lg text-gray-700">{data.review.text}</p>
                    </motion.div>

                    {/* Explore More */}
                    <div className="text-center">
                        <NavGrid excludeId="etp-tors" section="etp" />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ETPToRs;
