import React, { useState } from "react";
import logo from '../../assets/Images/logo.png';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header1 = () => {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '#about' },
        { name: 'Services', link: '#services' },
        { name: 'Projects', link: '#projects' },
        { name: 'Team', link: '#team' },
        { name: 'Contact', link: '#contact' },
        { name: 'Blog', link: 'BlogDet' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index, link) => {
        setActiveLink(index);
        setIsOpen(false);

        // Scroll to the section
        const section = document.querySelector(link);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
                <div className="w-25 h-25 cursor-pointer">
                    <a href="/" ><img src={logo} alt='logo' /></a>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className="text-black font-custom">
                    <div className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
                        {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>
                </div>
                <ul className={`md:flex mx-auto md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
                 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all bg-white duration-500 ease-in  ${isOpen ? 
                 'top-12' : 'top-[-499px]'}`}>
                    {Links.map((link, index) => (
                        <li
                            key={index}
                            className={`font-normal my-7 md:my-0 md:ml-8 ${activeLink === index ? 'text-yellow-500' : 'text-black'}`}
                        >
                            <a href={link.link} onClick={(e) => { e.preventDefault(); handleLinkClick(index, link.link); }}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header1;
