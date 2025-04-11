import React from 'react';
import Frame from '../Images/Frame.png';
import Cube from '../Images/cube.png';
import Hand from '../Images/hand.png';
import Check from '../Images/check.png';
import content from '../content';

const Trust = () => {
    const Processes = [
        {
            title: content.Process.cards.heading1,
            description: content.Process.cards.desc1,
            image: Cube,
        },
        {
            title: content.Process.cards.heading2,
            description: content.Process.cards.desc2,
            image: Hand,
        },
        {
            title: content.Process.cards.heading3,
            description: content.Process.cards.desc3,
            image: Check,
        },
    ];

    return (
        <div className="bg-[#020107] px-4 lg:px-20 lg:pt-10 lg:pb-32">
            {/* TRUST SECTION */}
            <div className="flex flex-col justify-center items-center pb-20 pt-20 gap-5 text-center">
                <h1 className="text-[32px] md:text-[50px] font-semibold text-white">
                    {content.Process.Trust.title}
                </h1>
                <p className="text-white text-[18px] md:text-[24px]">
                    {content.Process.Trust.desc}
                </p>
                <img
                    src={Frame}
                    alt="certifications"
                    className="w-full max-w-3xl"
                />
            </div>

            {/* PROCESS SECTION */}
            <div className="flex flex-col justify-center items-center text-center gap-3 mb-10">
                <h1 className="text-[32px] md:text-[50px] font-semibold text-white">
                    {content.Process.Process.title}
                </h1>
                <p className="text-white text-[18px] md:text-[24px]">
                    {content.Process.Process.desc}
                </p>
            </div>

            {/* PROCESS CARDS */}
            <div className="flex flex-col gap-6">
                {/* First process  */}
                <div className="bg-gradient-to-r from-[#04040A] via-[#05071E] to-[#111348] flex flex-col justify-between md:flex-row items-start md:items-center gap-5 p-8 rounded-xl">
                    <div className="flex flex-col gap-3 text-left flex-1">
                        <h1 className="text-white text-2xl md:text-3xl font-semibold">
                            {Processes[0].title}
                        </h1>
                        <p className="text-white max-w-xl">
                            {Processes[0].description}
                        </p>
                    </div>
                    <img
                        src={Processes[0].image}
                        alt="Process"
                        className="w-32 md:w-44"
                    />
                </div>

                {/*  */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {[Processes[1], Processes[2]].map((process, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between md:flex-row bg-gradient-to-r from-[#04040A] via-[#05071E] to-[#111348] rounded-xl flex-1 gap-5 hover:bg-gradient-to-r hover:from-[#111348] hover:via-[#05071E] hover:to-[#04040A] transition ease-in-out duration-1000"
                        >
                            <div className="flex flex-col gap-3 text-left flex-1 p-8">
                                <h1 className="text-white text-2xl md:text-3xl font-semibold">
                                    {process.title}
                                </h1>
                                <p className="text-white">
                                    {process.description}
                                </p>
                            </div>
                            <img
                                src={process.image}
                                alt="Process"
                                className="w-48 md:w-44"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trust;
