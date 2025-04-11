import React from 'react';
import { Link } from 'react-router-dom';
import content from '../content';
// Components
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import LogoSlider from '../components/LogoSlider';
import Offerings from '../components/Offerings';
import Represent from '../components/Represent';
import Certifications from '../components/Certifications';
import Trust from '../components/Trust';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
// Images
import Line from '../Images/Line.png';
import HeroImage from '../Images/hero.png';
import HeroImage2 from '../Images/hero2.png';
import Stroke from '../Images/stroke.png';

const Home = () => {
    return (
        <section>
            <div className="w-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] hover:bg-gradient-to-r hover:from-[#111A89] hover:via-[#05071E] hover:to-[#05071E] transition transition-ease duration-2000 flex flex-col gap-5">
                    <FadeInWhenVisible>
                        <header
                            className="flex flex-col gap-5 justify-center text-center items-center pt-10 px-4 bg-cover bg-center bg-no-repeat w-full"
                            style={{ backgroundImage: `url(${Line})` }}
                        >
                            <p className="bg-[#2E6D9C] text-xs sm:text-sm md:text-base border-white py-2 px-4 text-white rounded-full">
                                {content.Header.welcome}
                            </p>

                            <h1 className="text-3xl sm:text-5xl lg:text-[80px] font-semibold leading-tight lg:leading-[4.5rem] text-white lg:max-w-[50%]">
                                {content.Header.title}
                            </h1>

                            <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl">
                                {content.Header.description}
                            </p>
                        </header>

                        {/* CTA BUTTONS */}
                        <div className="flex gap-3 justify-center px-4 py-10">
                            <Link
                                to="/"
                                className="text-white text-center text-sm sm:text-lg font-semibold border border-[#4169E1] bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-8 rounded-full"
                            >
                                {content.Header.button.started}
                            </Link>
                            <Link
                                to="/"
                                className="text-white text-center text-sm sm:text-lg font-semibold border border-[#4169E1] bg-gradient-to-r from-[#000080] via-[#4169E1] to-[#000080] py-3 px-8 rounded-full"
                            >
                                {content.Header.button.learn}
                            </Link>
                        </div>
                    </FadeInWhenVisible>

                    {/* HERO IMAGE */}
                    <FadeInWhenVisible>
                        <div
                            className="bg-center bg-cover bg-no-repeat flex justify-center items-center px-4 pb-16 md:pb-32"
                            style={{ backgroundImage: `url(${Stroke})` }}
                        >
                            <img
                                src={HeroImage}
                                alt="Hero"
                                className="w-full max-w-4xl object-contain"
                            />
                        </div>
                    </FadeInWhenVisible>

                    <LogoSlider />
                </div>

                {/* WHY TRUST US SECTION */}
                <div className="relative bg-gradient-to-b from-[#05071E] via-[#05071E] to-[#111D47] py-20 px-4 flex flex-col gap-6 justify-center items-center text-center">
                    <FadeInWhenVisible>
                        <div
                            className="absolute inset-0 bg-black/60 z-0"
                            style={{
                                backgroundImage: `url(${Line})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                opacity: 0.5,
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center gap-6">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                                {content.Trust.title}
                            </h2>

                            <p className="text-base sm:text-lg md:text-xl text-[#888888] max-w-2xl">
                                {content.Trust.desc1}
                            </p>

                            <div className="flex flex-col gap-6 max-w-4xl">
                                <p className="text-base sm:text-lg md:text-2xl text-[#D2D2D2] leading-relaxed">
                                    {content.Trust.desc2}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-[#D2D2D2]">
                                    {content.Trust.desc3}
                                </p>
                            </div>

                            <img
                                src={HeroImage2}
                                alt="Hero 2"
                                className="w-full max-w-4xl object-contain px-4"
                            />
                        </div>
                    </FadeInWhenVisible>
                </div>

                {/* Components */}
                <Offerings />
                <Represent />
                <Certifications />
                <Trust />
                <Partners />
                <Footer />
            </div>
        </section>
    );
};

export default Home;
