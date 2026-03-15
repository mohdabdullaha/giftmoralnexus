import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/GIFT MORAL NEXUS.png';
import { content } from '../data/content';
import { Menu, X } from 'lucide-react';

const Navbar = ({ pageTitle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Cardinal Virtues", path: "/truthfulness" },
        { title: "Raz E Hayat", path: "/razehayat" },
        { title: "Emandar Tajir Program", path: "/etp" },
        { title: "Infographics", path: "/infographics" },
        { title: "Motivational Videos", path: "/videos" }
    ];

    return (
        <nav className="flex flex-col w-full shadow-lg z-50 sticky top-0 bg-navy">
            {/* Top Header */}
            <div className="relative bg-navy text-white px-4 md:px-6 py-4 flex items-center justify-between gap-4 border-b border-white/5 min-h-[80px]">
                <div className="flex items-center justify-between w-full md:w-auto z-10">
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                        <img src={logo} alt="Logo" className="h-[45px] md:h-[55px] transition-transform hover:scale-110" />
                    </NavLink>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-4">
                        <div className="text-right">
                            <h2 className="text-[10px] font-bold text-gold/60 uppercase tracking-widest leading-none mb-1">Current Section</h2>
                            <h2 className="text-sm font-bold tracking-tight text-white leading-none">
                                {pageTitle || 'Home'}
                            </h2>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[50%] pointer-events-none text-center">
                    <h2 id="siteTitle" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.05em] md:tracking-[0.2em] animate-intro-zoom text-white pointer-events-auto inline-block">
                        {content.metadata.siteTitle}
                    </h2>
                </div>

                {/* Desktop Page Title */}
                <div className="hidden md:flex justify-end z-10">
                    <h2 className="text-lg md:text-2xl font-bold tracking-wider text-white/90">
                        {pageTitle || 'Home'}
                    </h2>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block bg-navy-dark w-full overflow-x-auto">
                <div className="max-w-7xl mx-auto flex justify-center items-center px-4">
                    <div className="flex items-stretch">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-5 py-3 text-[13px] font-bold tracking-widest transition-all whitespace-nowrap border-b-2 ${isActive
                                        ? 'text-gold border-gold bg-white/5'
                                        : 'text-white/80 hover:text-white border-transparent hover:border-white/30'
                                    }`
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-navy-dark border-t border-white/10 shadow-2xl overflow-hidden">
                    <div className="flex flex-col p-4 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `px-6 py-4 rounded-xl text-base font-bold tracking-wider transition-all border-l-4 ${isActive
                                        ? 'text-gold border-gold bg-white/10 shadow-inner'
                                        : 'text-white/70 border-transparent hover:bg-white/5'
                                    }`
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
