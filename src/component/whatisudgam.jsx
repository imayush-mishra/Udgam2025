// Start of Selection
import React from 'react';
import video from '../assets/video.webm';

const WhatIsUdgam = () => {
    return (
        <div className="flex flex-col md:flex-row p-4 pt-0">
            <div className="w-full md:w-1/2">
                <video src={video} controls className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-end items-start p-6  rounded-lg shadow-lg">
                <p className="text-xl text-gray-800">
                UDGAM is the flagship event of the E-Cell, IIT Guwahati. It was conceptualized to develop and spread the spirit of entrepreneurship among the youth of the North-East, and India in general thus earning itself the reputation of being the largest E-Summit in the north-east. UDGAM acts as an exclusive platform for entrepreneurs, startup enthusiasts, and product managers to meet, discuss, explore, share, debate, and have fun, while celebrating the idea of entrepreneurship and innovation.
                </p>
                <h1 style={{ color: 'var(--Udgam-Black, #222)', fontFamily: 'PP Mori', fontSize: '40px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', textTransform: 'capitalize' }}>What is Udgam?</h1>
            </div>
        </div>
    );
};

export default WhatIsUdgam;
