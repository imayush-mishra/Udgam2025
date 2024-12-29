import React from 'react';
import event1 from '../assets/internFair.png';
import event2 from '../assets/startupExpo.png';
import event3 from '../assets/disrupt.png';
import './landing_event.css';

const events = [
    { name: 'INTERNFAIR', imageUrl: event1, description: 'Start-Up Expo 2025 is a premier event connecting startups, investors, VCs, incubators, and government leaders from across India. It’s the ultimate platform for networking, funding, and collaboration—don’t miss the chance to elevate your startup!' },
    { name: 'StartUpExpo', imageUrl: event2, description: 'Start-Up Expo 2025 is a premier event connecting startups, investors, VCs, incubators, and government leaders from across India. It’s the ultimate platform for networking, funding, and collaboration—don’t miss the chance to elevate your startup!' },
    { name: 'DISRUPT', imageUrl: event3, description: 'Start-Up Expo 2025 is a premier event connecting startups, investors, VCs, incubators, and government leaders from across India. It’s the ultimate platform for networking, funding, and collaboration—don’t miss the chance to elevate your startup!' },
];

const LandingEvents = () => {
    return (
        <>
            <div className="events-list">
                {events.map((event, index) => (
                    <div key={index} className="flex flex-col md:flex-row event-card m-4 rounded-lg shadow-lg border border-gray-300">
                        <div className="w-full md:w-1/2 relative">
                            <img src={event.imageUrl} alt={event.name} className="h-auto rounded-lg shadow-lg" />
                            <a href="/" className="register-button absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white py-2 px-4 rounded">
                                Register Now
                            </a>
                        </div>
                        <div className="event-description-text m-4">
                            <h1 className="event-heading text-center p-4">What is {event.name}</h1>
                            <p className="event-content">
                                {event.description}
                            </p>
                        </div>
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
        </>
    );
};

export default LandingEvents;
