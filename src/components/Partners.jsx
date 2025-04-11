import React from 'react';
import Frame2 from '../Images/Frame2.webp';
import Frame3 from '../Images/Frame3.webp';
import Frame4 from '../Images/Frame4.webp';
import Frame5 from '../Images/Frame5.webp';
import Frame6 from '../Images/Frame6.webp';
import Framebg from '../Images/Framebg.webp';
import content from '../content';

const Partners = () => {
    return (
        <div className="bg-[#020107]">
            {/* PARTNER SECTION HEADER */}
            <div className="flex flex-col justify-center items-center text-center gap-3 pt-16 px-4">
                <h1 className="text-[28px] md:text-[50px] font-semibold text-white">
                    {content.Partners.title}
                </h1>
                <p className="text-white text-[16px] md:text-[24px] max-w-2xl">
                    {content.Partners.desc}
                </p>

                {/* PARTNER LOGOS */}
                <div className="flex flex-wrap justify-center items-center gap-5 py-10">
                    {[Frame2, Frame3, Frame4, Frame5, Frame6].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="Partner"
                            className="w-24 sm:w-28 md:w-32 lg:w-56"
                        />
                    ))}
                </div>
            </div>

            {/* CALL TO ACTION SECTION */}
            <div className="bg-gradient-to-r from-[#111348] via-[#05071E] to-[#111348] px-4 py-16 md:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto rounded-4xl shadow-md bg-gradient-to-r from-[#04040A] via-[#05071E] to-[#111348] lg:px-0 px-10 lg:py-0 py-10">
                    {/* TEXT CONTENT */}
                    <div className="flex flex-col gap-6 text-left flex-1 lg:px-20">
                        <h1 className="text-white text-3xl md:text-[48px] lg:text-[60px] font-semibold leading-tight">
                            {content.Partners.calltoaction.title}
                        </h1>
                        <p className="text-white text-[24px]">
                            {content.Partners.calltoaction.desc1}
                        </p>
                        <p className="text-white text-[24px]">
                            {content.Partners.calltoaction.desc2}
                        </p>
                        <p className="text-white text-[24px]">
                            {content.Partners.calltoaction.desc3}
                        </p>
                        <div className="w-fit border border-[#4169E1] bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-6 rounded-full cursor-pointer hover:opacity-90 transition">
                            <button className="text-white text-sm md:text-base font-semibold">
                                {content.Partners.calltoaction.btn}
                            </button>
                        </div>
                    </div>

                    <div className="w-full max-w-sm lg:flex hidden">
                        <img
                            src={Framebg}
                            alt="Frame background"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
