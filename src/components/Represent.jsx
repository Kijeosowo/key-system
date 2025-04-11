import React from 'react';
import Search from '../Images/search.webp';
import Target from '../Images/target.webp';
import Blurbg from '../Images/blur.webp';
import content from '../content';

const Represent = () => {
    const cards = [
        {
            image: Search,
            title: content.Represent.heading.vision,
            description: content.Represent.heading.desc1,
        },

        {
            image: Target,
            title: content.Represent.heading.mission,
            description: content.Represent.heading.desc2,
        },
    ];

    return (
        <div className="bg-[#05071E] px-4 py-20">
            <div className="flex flex-col gap-5 justify-center items-center text-center mb-16">
                <h1 className="text-white text-3xl md:text-5xl font-semibold">
                    {content.Represent.title}
                </h1>
                <p className="text-lg md:text-2xl text-white max-w-4xl">
                    {content.Represent.desc}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="rounded-2xl p-[2px] bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#05071E] group"
                    >
                        <div
                            className="rounded-2xl p-8 border border-[#01B4DE] text-white h-full  group-hover:scale-105 transition ease duration-500"
                            style={{
                                backgroundImage: `url(${Blurbg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <img
                                src={card.image}
                                alt="icon"
                                className="w-28 h-28 mb-6"
                            />
                            <h2 className="text-2xl lg:text-[40px] font-semibold mb-2">
                                {card.title}
                            </h2>
                            <p className="text-base md:text-lg text-[#CCCCCC] leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Represent;
