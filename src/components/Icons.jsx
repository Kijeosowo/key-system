import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { RiFacebookCircleFill } from 'react-icons/ri';

const Icons = () => {
    return (
        <div className="flex gap-5 text-2xl text-[#434148]">
            <AiFillInstagram />
            <FaXTwitter />
            <TbBrandLinkedinFilled />
            <RiFacebookCircleFill />
        </div>
    );
};

export default Icons;
