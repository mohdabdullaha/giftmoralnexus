import React from 'react';
import giftLogo from '../../assets/logo/GIFT Logo.png';
import nexusLogo from '../../assets/logo/GIFT MORAL NEXUS.png';
import mcdLogo from '../../assets/logo/MCD.png';
import locIcon from '../../assets/logo/location.png';
import servIcon from '../../assets/logo/Services.png';
import callIcon from '../../assets/logo/Call.png';
import faxIcon from '../../assets/logo/Fax.png';
import webIcon from '../../assets/logo/Web.png';
import fbIcon from '../../assets/logo/Facebook.png';
import igIcon from '../../assets/logo/Instagram.png';
import ytIcon from '../../assets/logo/Youtube.png';
import liIcon from '../../assets/logo/LinkedIn.png';
import twIcon from '../../assets/logo/Twitter.png';
import tkIcon from '../../assets/logo/Tiktok.png';
import waIcon from '../../assets/logo/WhatsApp.png';
import { content } from '../../data/content';

const Footer = () => {
    const { metadata } = content;

    return (
        <footer className="bg-navy-dark text-[#dbe6f1] py-10 px-5 border-t border-navy">
            <div className="flex justify-center items-center gap-8 md:gap-44 flex-wrap mb-5">
                <img src={giftLogo} alt="GIFT University" className="h-[70px]" />
                <img src={nexusLogo} alt="Gift Moral Nexus" className="h-[100px]" />
                <img src={mcdLogo} alt="Mayaang Changian" className="h-[70px]" />
            </div>

            <div className="text-[14.5px] mb-4 space-y-2">
                <p className="flex justify-center items-center gap-1.5 flex-wrap">
                    <img src={locIcon} alt="Location" className="h-[15px]" />
                    {metadata.contact.location}
                </p>
                <p className="flex justify-center items-center gap-1.5 flex-wrap">
                    <img src={servIcon} alt="Services" className="h-[15px]" />
                    {metadata.contact.phone}
                    <img src={callIcon} alt="Phone" className="h-[15px]" />
                    {metadata.contact.altPhone}
                    <img src={faxIcon} alt="Fax" className="h-[15px]" />
                    {metadata.contact.fax}
                </p>
                <p className="flex justify-center items-center gap-1.5 flex-wrap">
                    <img src={webIcon} alt="WEB" className="h-[15px]" />
                    {metadata.contact.web}
                </p>
            </div>

            <div className="flex justify-center items-center gap-3 mb-4">
                {[
                    { icon: fbIcon, url: metadata.socials.facebook, alt: 'Facebook' },
                    { icon: igIcon, url: metadata.socials.instagram, alt: 'Instagram' },
                    { icon: ytIcon, url: metadata.socials.youtube, alt: 'YouTube' },
                    { icon: liIcon, url: metadata.socials.linkedin, alt: 'LinkedIn' },
                    { icon: twIcon, url: metadata.socials.twitter, alt: 'Twitter' },
                    { icon: tkIcon, url: metadata.socials.tiktok, alt: 'TikTok' },
                    { icon: waIcon, url: metadata.socials.whatsapp, alt: 'WhatsApp' },
                ].map((social, idx) => (
                    <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
                        <img src={social.icon} alt={social.alt} className="h-6" />
                    </a>
                ))}
                <span className="text-sm font-semibold ml-2">{metadata.siteHandle}</span>
            </div>
            <div className="text-[13px] opacity-80 mt-3 border-t border-navy-light pt-4">
                © Abdullah Asif – Adroit Creatives
            </div>
        </footer>
    );
};

export default Footer;
