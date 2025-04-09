import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import Content from '../content';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav className="flex justify-between items-center px-5 lg:px-20 bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] py-5 shadow-lg relative">
                {/* Logo */}
                <div>
                    <Logo />
                </div>

                {/* Desktop Nav links */}
                <ul className="hidden md:flex gap-5">
                    <li>
                        <Link to="/" className="text-sm text-[#CFCFCF]">
                            {Content.navbar.home}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-sm text-[#CFCFCF]">
                            {Content.navbar.about}
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-sm text-[#CFCFCF]">
                            {Content.navbar.services}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-sm text-[#CFCFCF]">
                            {Content.navbar.contact}
                        </Link>
                    </li>
                </ul>

                {/* Call Center - Desktop only */}
                <div className="hidden md:flex border border-[#4169E1] bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-2 px-6 rounded-full">
                    <p className="text-white text-sm">{Content.navbar.phone}</p>
                </div>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Slide Menu */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-[#05071E] text-white z-50 transform transition-transform duration-300 ${
                        menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="p-5 flex justify-between items-center border-b border-gray-700">
                        <Logo />
                        <button onClick={() => setMenuOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-6 p-6">
                        <li>
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                {Content.navbar.home}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                            >
                                {Content.navbar.about}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                onClick={() => setMenuOpen(false)}
                            >
                                {Content.navbar.services}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                            >
                                {Content.navbar.contact}
                            </Link>
                        </li>
                        <li className="mt-6">
                            <div className="border border-[#4169E1] bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-2 px-4 rounded-full text-center">
                                <p className="text-white text-sm">
                                    {Content.navbar.phone}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
