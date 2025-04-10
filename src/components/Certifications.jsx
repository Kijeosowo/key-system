import React from 'react';
import { Link } from 'react-router-dom';
import CertificationImage from '../Images/certifications.png';

const Certifications = () => {
    return (
        <div className="flex flex-col justify-center text-center items-center gap-5 bg-[#05071E] pb-32 pt-32">
            <h1 className="text-white text-[50px] leading-[3rem] font-semibold">
                Compliance Certifications/ <br />
                Standards We Specialize In
            </h1>
            <p className="text-white text-[24px]">
                Elevate Your Organization's Security Posture with Our <br />
                Compliance/Standards Consulting Services
            </p>
            <div className="hidden md:flex border border-[#4169E1] bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-6 mt-5 mb-5 rounded-full">
                <Link className="text-white text-lg font-semibold" to="/">
                    Contact Us
                </Link>
            </div>
            <img
                src={CertificationImage}
                alt="certifications"
                className="w-2/3"
            />
        </div>
    );
};

export default Certifications;
