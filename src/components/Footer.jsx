import React from 'react';
import Logo from './Logo';
import Icons from '../components/Icons';
import content from '../content';

const Footer = () => {
    return (
        <div className="bg-[#030517] pt-10 pb-10 px-6 md:px-10 lg:px-20">
            <footer className="grid grid-cols-1 lg:grid-cols-3 gap-10 min-h-[90vh]">
                {/* Side Footer */}
                <aside className="flex flex-col justify-between">
                    <div>
                        <Logo />
                        <p className="text-sm text-white mt-4 lg:max-w-[60%]">
                            {content.Footer.logotext}
                        </p>
                    </div>

                    <div className="mt-6">
                        <h1 className="text-xl font-semibold text-white">
                            {content.Footer.links.title}
                        </h1>
                        <ul className="text-white py-4 flex flex-col gap-2">
                            <li>{content.navbar.home}</li>
                            <li>{content.navbar.about}</li>
                            <li>{content.navbar.services}</li>
                            <li>{content.navbar.contact}</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <Icons />
                    </div>
                </aside>

                {/* Main Footer */}
                <main className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-white font-semibold text-xl">
                            {content.Footer.Services.title}
                        </h1>
                        <div className="flex flex-col md:flex-row gap-10 py-4">
                            <ul className="flex flex-col gap-2 text-[#CFCFCF]">
                                <li>{content.Footer.Services.list[1]}</li>
                                <li>{content.Footer.Services.list[2]}</li>
                                <li>{content.Footer.Services.list[3]}</li>
                                <li>{content.Footer.Services.list[4]}</li>
                                <li>{content.Footer.Services.list[5]}</li>
                                <li>{content.Footer.Services.list[6]}</li>
                            </ul>
                            <ul className="flex flex-col gap-2 text-[#CFCFCF]">
                                <li>{content.Footer.Services.list[7]}</li>
                                <li>{content.Footer.Services.list[8]}</li>
                                <li>{content.Footer.Services.list[9]}</li>
                                <li>{content.Footer.Services.list[10]}</li>
                                <li>{content.Footer.Services.list[11]}</li>
                                <li>{content.Footer.Services.list[12]}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-white font-semibold text-xl">
                            {content.Contact.title}
                        </h1>
                        <div className="flex flex-col md:flex-row gap-10 py-3">
                            <div>
                                <p className="font-semibold text-white">
                                    {content.Contact.Nigeria.header}
                                </p>
                                <p className="text-[#CFCFCF] lg:max-w-[60%]">
                                    {content.Contact.Nigeria.desc}
                                </p>
                            </div>
                            <div>
                                <p className="text-white font-semibold">
                                    {content.Contact.Uk.header}
                                </p>
                                <p className="text-[#CFCFCF] lg:max-w-[60%]">
                                    {content.Contact.Uk.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Telephone */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <p className="text-white font-semibold">
                                {content.Contact.Uk.header}
                            </p>
                            <p className="text-[#CFCFCF] py-2">
                                {content.Contact.Ukphone.phone}
                            </p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">
                                {content.Contact.arabphone.header}
                            </p>
                            <p className="text-[#CFCFCF] py-2">
                                {content.Contact.arabphone.phone}
                            </p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">
                                {content.Contact.canadaphone.header}
                            </p>
                            <p className="text-[#CFCFCF] py-2">
                                {content.Contact.canadaphone.phone}
                            </p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">
                                {content.Contact.Nigeria.header}
                            </p>
                            <p className="text-[#CFCFCF] py-2">
                                {content.Contact.nigeriaphone.phone}
                            </p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">
                                {content.Contact.email.title}
                            </p>
                            <p className="text-[#CFCFCF] py-2">
                                {content.Contact.email.mail}
                            </p>
                        </div>
                    </div>
                </main>
            </footer>
        </div>
    );
};

export default Footer;
