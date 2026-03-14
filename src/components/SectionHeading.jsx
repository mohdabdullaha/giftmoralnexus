import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, centered = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`flex flex-col mb-12 ${centered ? 'items-center text-center' : 'items-start text-left'}`}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 tracking-tight">
                {children}
            </h2>
            <div className="w-24 h-1.5 bg-gold rounded-full" />
        </motion.div>
    );
};

export default SectionHeading;
