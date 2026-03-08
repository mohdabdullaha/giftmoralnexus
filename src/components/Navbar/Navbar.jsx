import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/GIFT MORAL NEXUS.png';
import { content } from '../../data/content';

const Navbar = ({ pageTitle }) => {
    const navLinks = [
        { title: "HOME", path: "/" },
        { title: "VISION & MISSION", path: "/vision-mission" },
        { title: "INFOGRAPHICS", path: "/infographics" },
        { title: "ABOUT US", path: "/about" },
        { title: "CONTACT", path: "/contact" }
    ];

    return (
        <nav className="flex flex-col w-full shadow-lg z-50 sticky top-0">
            {/* Top Header */}
            <div className="bg-navy text-white px-6 py-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <div className="flex items-center">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" className="h-[55px] transition-transform hover:scale-110" />
                    </NavLink>
                </div>

                <div className="text-center">
                    <h2 id="siteTitle" className="text-2xl md:text-3xl font-bold tracking-[0.2em] animate-intro-zoom text-white mx-auto">
                        {content.metadata.siteTitle}
                    </h2>
                </div>

                <div className="flex justify-end">
                    <h2 className="text-lg md:text-2xl font-bold tracking-wider text-white/90 uppercase">
                        {pageTitle || 'HOME'}
                    </h2>
                </div>
            </div>

            {/* Secondary Nav Bar */}
            <div className="bg-navy-dark w-full overflow-x-auto">
                <div className="max-w-7xl mx-auto flex justify-center items-center px-4">
                    <div className="flex items-stretch">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-5 py-3 text-[13px] font-bold tracking-widest transition-all whitespace-nowrap border-b-2 ${isActive
                                        ? 'text-gold border-gold'
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
        </nav>
    );
};

export default Navbar;
