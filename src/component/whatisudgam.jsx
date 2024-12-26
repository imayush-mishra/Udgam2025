// Start of Selection
import React from 'react';
import video from '../assets/video.webm';

const WhatIsUdgam = () => {
    return (
        <div className="flex flex-col md:flex-row p-4">
            <div className="w-full md:w-1/2">
                <video src={video} controls className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 flex items-center p-6 bg-blue-200">
                <p className="text-xl text-gray-800">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eaque laboriosam deleniti reiciendis pariatur aliquam ex ut libero, iste excepturi voluptas vitae molestiae numquam nam perferendis in corrupti. Mollitia, sed!
                </p>
            </div>
        </div>
    );
};

export default WhatIsUdgam;
