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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eaque laboriosam deleniti reiciendis pariatur aliquam ex ut libero, iste excepturi voluptas vitae molestiae numquam nam perferendis in corrupti. Mollitia, sed!
                </p>
                <h1 style={{ color: 'var(--Udgam-Black, #222)', fontFamily: 'PP Mori', fontSize: '40px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', textTransform: 'capitalize' }}>What is Udgam?</h1>
            </div>
        </div>
    );
};

export default WhatIsUdgam;
