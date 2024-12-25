import React from 'react';
import speaker1 from '../assets/speaker1.jpg';
import speaker2 from '../assets/speaker2.jpg';
import speaker3 from '../assets/speaker3.jpg';
import speaker4 from '../assets/speaker4.jpg';
// import './landing_sponsors.css';

const sponsors = [
    { name: 'Sponsor 1', imageUrl: speaker1, description: 'Description for Sponsor 1' },
    { name: 'Sponsor 3', imageUrl: speaker3, description: 'Description for Sponsor 3' },
    { name: 'Sponsor 4', imageUrl: speaker4, description: 'Description for Sponsor 4' },
];

const LandingSponsors = () => {
    return (
        <div className="sponsor-container pt-4">
            <div className="flex justify-center space-x-4">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="sponsor-card border-2 border-gray-300 rounded-lg p-2 shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img src={sponsor.imageUrl} alt={sponsor.name} className="object-contain rounded-t-lg" />
                        <h3 className="text-xxl md:text-lg font-bold mt-4 border border-gray-300 bg-blue-300 p-2 rounded">{sponsor.name}</h3>
                        <p className="text-sm text-gray-600 md:text-base">{sponsor.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-left mt-4">
                <div className="flex justify-center pb-4">
                    <a href="/sponsors" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center">
                        View More
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="12" fill="blue-800" />
                            <path d="M19.4503 13.0523V10.9849L13.4157 5.05859L10.4657 5.05859L16.4455 10.9849H4.57031V13.0523H16.4857L10.506 18.9786H13.4561L19.4503 13.0523Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingSponsors;

// Add the following CSS to your styles to make it responsive and decrease the container size
