import React from 'react';
import { Link } from 'react-router-dom';
import Mouse from '../Images/mouse.png';
import content from '../content';

const offeringsList = [
    'Core banking services',
    'Staff augmentation solutions',
    'Business Intelligence',
    'Digital Banking & financial inclusion',
    'Internal audit solutions',
    'KeySystem software testing',
    'Online/mobile lending solution',
    'Data Warehouse',
    'Cybersecurity Solutions',
];

const gradients = [
    'from-[#DCAEC2] to-transparent',
    'from-[#DCAEC2] to-transparent',
    'from-[#DCAEC2] to-transparent',
    'from-[#DCAEC2] to-transparent',
    'from-[#DCAEC2] to-transparent',
    'from-[#DCAEC2] to-transparent',
    'from-[#DCAEC2] to-transparent',
    'from-[#DCAEC2] to-transparent',
    'from-[#DCAEC2] to-transparent',
];

const bggradients = [
    'from-[#0A3440E3] to-[#05071EA6]',
    'from-[#0A0E40E3] to-[#05071EA6]',
    'from-[#0D400AE3] to-[#05071EA6]',
    'from-[#40330AE3] to-[#05071EA6]',
    'from-[#3CA3BAE3] to-[#05071EA6]',
    'from-[#400A3AE3] to-[#05071EA6]',
    'from-[#400A0AE3] to-[#05071EA6]',
    'from-[#4A8C2BE3] to-[#05071EA6]',
    'from-[#6012CEB8] to-[#05071EA6]',
];

const Offerings = () => {
    return (
        <div className="bg-[#05071E] px-4 py-20">
            <div className="flex flex-col gap-10 text-center items-center max-w-6xl mx-auto">
                <h1 className="text-white font-semibold text-3xl md:text-5xl">
                    {content.Offerings.title}
                </h1>
                <p className="text-white text-base md:text-xl leading-relaxed max-w-3xl">
                    {content.Offerings.description}
                </p>
                <Link
                    to="/"
                    className="text-white w-fit text-sm sm:text-lg font-semibold border border-[#4169E1] bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-8 rounded-full"
                >
                    {content.Header.button.learn}
                </Link>
            </div>

            {/* Gradient-bordered  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                {offeringsList.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-b ${
                            gradients[index % gradients.length]
                        } p-[2px] rounded-full`}
                    >
                        <div
                            className={`bg-gradient-to-b text-white text-[24px] flex flex-col justify-center items-center py-5 ${
                                bggradients[index % bggradients.length]
                            } p-[2px] rounded-full`}
                        >
                            <h1 className="text-center">{item}</h1>
                            <img
                                src={Mouse}
                                alt="Mouse"
                                className="w-8 sm:w-10 lg:w-5 mt-4 transition-transform duration-300 transform hover:rotate-12"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offerings;
