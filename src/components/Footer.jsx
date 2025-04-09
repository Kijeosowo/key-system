import React from 'react';
import Logo from './Logo';
import Icons from '../components/Icons';

const Footer = () => {
    return (
        <div className="bg-[#030517] pt-10 pb-10 px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 min-h-[90vh]">
                {/* Side Footer */}
                <div className="flex flex-col justify-between">
                    <div>
                        <Logo />
                        <p className="text-sm text-white mt-4">
                            2025 KeySystem Technology Limited. <br /> All rights
                            reserved.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h1 className="text-xl font-semibold text-white">
                            QUICK LINKS
                        </h1>
                        <ul className="text-white py-4 flex flex-col gap-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <Icons />
                    </div>
                </div>

                {/* Main Footer (spans 2 columns on large screens) */}
                <main className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-white font-semibold text-xl">
                            SERVICES
                        </h1>
                        <div className="flex flex-col md:flex-row gap-10 py-4">
                            <ul className="flex flex-col gap-2 text-[#CFCFCF]">
                                <li>Core refresh</li>
                                <li>Application management services</li>
                                <li>Evolution & enhancement services</li>
                                <li>Solution Assurance & validation</li>
                                <li>Digital Banking & financial inclusion</li>
                                <li>Online/mobile lending solution</li>
                            </ul>
                            <ul className="flex flex-col gap-2 text-[#CFCFCF]">
                                <li>Staff augmentation solutions</li>
                                <li>
                                    Risk management & Internal audit solutions
                                </li>
                                <li>
                                    Data Warehouse & Business Intelligence (BI)
                                </li>
                                <li>
                                    Enterprise Document Management Solutions
                                </li>
                                <li>KeySystem software testing</li>
                                <li>Cybersecurity Solutions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-white font-semibold text-xl">
                            CONTACT
                        </h1>
                        <div className="flex flex-col md:flex-row gap-10 py-3">
                            <div>
                                <p className="font-semibold text-white">
                                    Nigeria
                                </p>
                                <p className="text-[#CFCFCF]">
                                    p55G Adebisi Omotola Close, <br />
                                    Off Samuel Adedoyin Street, <br />
                                    Victoria Island.
                                </p>
                            </div>
                            <div>
                                <p className="text-white font-semibold">
                                    United Kingdom
                                </p>
                                <p className="text-[#CFCFCF]">
                                    39 Kenyon Lane, Off Moston <br />
                                    Lane, Moston, Manchester, <br />
                                    United Kingdom, M40 9JG
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Telephone */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <p className="text-white font-semibold">
                                United Kingdom
                            </p>
                            <p className="text-[#CFCFCF] py-2">
                                Tel: +44 161 948 1444
                            </p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">
                                United Arab Emirates
                            </p>
                            <p className="text-[#CFCFCF] py-2">
                                Tel: +971 50 423 8817
                            </p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">Canada</p>
                            <p className="text-[#CFCFCF] py-2">
                                Tel: +1 647 977 1435
                            </p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">Nigeria</p>
                            <p className="text-[#CFCFCF] py-2">
                                Tel: +234 818 444 1404
                            </p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">Email</p>
                            <p className="text-[#CFCFCF] py-2">
                                enquiries@keysystemltd.com
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Footer;
