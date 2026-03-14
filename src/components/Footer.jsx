import React from 'react';
import giftLogo from '../assets/logo/GIFT Logo.png';
import nexusLogo from '../assets/logo/GIFT MORAL NEXUS.png';
import locIcon from '../assets/logo/location.png';
import servIcon from '../assets/logo/Services.png';
import callIcon from '../assets/logo/Call.png';
import faxIcon from '../assets/logo/Fax.png';
import webIcon from '../assets/logo/Web.png';
import fbIcon from '../assets/logo/Facebook.png';
import igIcon from '../assets/logo/Instagram.png';
import ytIcon from '../assets/logo/Youtube.png';
import liIcon from '../assets/logo/LinkedIn.png';
import twIcon from '../assets/logo/Twitter.png';
import tkIcon from '../assets/logo/Tiktok.png';
import waIcon from '../assets/logo/WhatsApp.png';
import { content } from '../data/content';

const Footer = () => {
    const { metadata } = content;

    return (
        <footer className="bg-navy-dark text-[#dbe6f1] py-12 px-6 border-t border-navy">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center gap-12 md:gap-24 lg:gap-40 flex-wrap mb-10">
                    <img src={giftLogo} alt="GIFT University" className="h-[60px] md:h-[70px] object-contain" />
                    <img src={nexusLogo} alt="GIFT Moral Nexus" className="h-[80px] md:h-[100px] object-contain" />
                </div>

                <div className="text-[13px] md:text-[14.5px] mb-8 space-y-4 max-w-3xl mx-auto text-center">
                    <p className="flex justify-center items-center gap-2 flex-wrap">
                        <img src={locIcon} alt="Location" className="h-[14px] opacity-70" />
                        {metadata.contact.location}
                    </p>
                    <div className="flex justify-center items-center gap-x-6 gap-y-2 flex-wrap">
                        <p className="flex items-center gap-2">
                            <img src={servIcon} alt="Services" className="h-[14px] opacity-70" />
                            {metadata.contact.phone}
                        </p>
                        <p className="flex items-center gap-2">
                            <img src={callIcon} alt="Phone" className="h-[14px] opacity-70" />
                            {metadata.contact.altPhone}
                        </p>
                        <p className="flex items-center gap-2">
                            <img src={faxIcon} alt="Fax" className="h-[14px] opacity-70" />
                            {metadata.contact.fax}
                        </p>
                    </div>
                    <p className="flex justify-center items-center gap-2 flex-wrap">
                        <img src={webIcon} alt="Web" className="h-[14px] opacity-70" />
                        <a href={`https://${metadata.contact.web}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-medium">
                            {metadata.contact.web}
                        </a>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 border-t border-white/5 pt-8">
                    <div className="flex justify-center items-center gap-4">
                        {[
                            { icon: fbIcon, url: metadata.socials.facebook, alt: 'Facebook' },
                            { icon: igIcon, url: metadata.socials.instagram, alt: 'Instagram' },
                            { icon: ytIcon, url: metadata.socials.youtube, alt: 'YouTube' },
                            { icon: liIcon, url: metadata.socials.linkedin, alt: 'LinkedIn' },
                            { icon: twIcon, url: metadata.socials.twitter, alt: 'Twitter' },
                            { icon: tkIcon, url: metadata.socials.tiktok, alt: 'TikTok' },
                            { icon: waIcon, url: metadata.socials.whatsapp, alt: 'WhatsApp' },
                        ].map((social, idx) => (
                            <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-125 hover:text-gold">
                                <img src={social.icon} alt={social.alt} className="h-5 md:h-6 transition-all" />
                            </a>
                        ))}
                    </div>
                    <span className="text-xs md:text-sm font-bold tracking-widest text-gold/80">{metadata.siteHandle}</span>
                </div>

                <div className="text-[11px] md:text-xs opacity-50 text-center mt-4">
                    © {new Date().getFullYear()} GIFT Moral Nexus – Abdullah Asif – Adroit Creatives
                </div>
            </div>
        </footer>
    );
};

export default Footer;
