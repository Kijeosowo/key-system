import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import Image1 from '../images/Image1.png';
import Image2 from '../images/Image2.png';
import Image3 from '../images/Image3.png';
import Image4 from '../images/Image4.png';
import Image5 from '../images/Image5.png';
import Image6 from '../images/Image6.png';
import Image7 from '../images/Image7.png';

const logos = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

const LogoSlider = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            x: ['0%', '-50%'],
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
            },
        });
    }, [controls]);

    return (
        <div
            className="overflow-hidden w-full bg-[#05071E] py-10"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
                controls.start({
                    x: ['0%', '-50%'],
                    transition: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 20,
                        ease: 'linear',
                    },
                })
            }
        >
            <motion.div className="flex w-max" animate={controls}>
                {[...logos, ...logos].map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`company-logo-${index}`}
                        className="w-20 md:w-24 lg:w-28 mx-6 transition-all duration-300 cursor-pointer"
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default LogoSlider;
