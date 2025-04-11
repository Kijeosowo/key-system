import React from 'react';
import { Link } from 'react-router-dom';
import CertificationImage from '../Images/certifications.webp';
import content from '../content';

const Certifications = () => {
    return (
        <div className="flex flex-col justify-center text-center items-center gap-6 bg-[#05071E] px-4 py-20">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold lg:max-w-[50%]">
                {content.Certification.title}
            </h1>

            <p className="lg:max-w-[50%] text-white text-base sm:text-lg md:text-xl">
                {content.Certification.desc}
            </p>

            <div className="mt-4">
                <Link
                    to="/"
                    className="inline-block border border-[#4169E1] bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-8 rounded-full text-white text-sm sm:text-base font-semibold"
                >
                    {content.navbar.contact}
                </Link>
            </div>

            <img
                src={CertificationImage}
                alt="certifications"
                className="w-full max-w-5xl mt-8 px-4"
            />
        </div>
    );
};

export default Certifications;
