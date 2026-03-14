import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const defaultImg = '/img.jpg';

const NavGrid = ({ excludeId }) => {
    const cards = content.home.cards.filter(card => card.id !== excludeId);

    return (
        <div className="mt-14">
            <h3 className="text-green text-3xl font-bold mb-8 tracking-wide">Explore More</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <NavLink
                            to={card.path}
                            className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group transform hover:-translate-y-2 border border-ice-border"
                        >
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={defaultImg}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="p-5 text-center">
                                <h4 className="text-xl font-bold mb-2 group-hover:text-green transition-colors">{card.title}</h4>
                                <p className="text-base text-gray-600 line-clamp-2">{card.desc}</p>
                            </div>
                        </NavLink>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NavGrid;
