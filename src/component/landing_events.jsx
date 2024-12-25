    import React from 'react';
    import event1 from '../assets/speaker1.jpg';
    import event2 from '../assets/speaker2.jpg';
    import event3 from '../assets/speaker3.jpg';
    import event4 from '../assets/speaker4.jpg';
    // import './landing_events.css';
    
    const events = [
        { name: 'Event 1', imageUrl: event1, description: 'Description for Event 1' },
        { name: 'Event 2', imageUrl: event2, description: 'Description for Event 2' },
        { name: 'Event 3', imageUrl: event3, description: 'Description for Event 3' },
        { name: 'Event 4', imageUrl: event4, description: 'Description for Event 4' },
    ];
    
    const LandingEvents = () => {
        return (
            <div className="events-container pt-4  flex flex-col items-center justify-flex-start">
                    <div className="space-y-4 w-full flex flex-col items-center justify-center">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`event-card flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} bg-white rounded-lg shadow-md overflow-hidden w-full max-w-4xl h-48`}
                        >
                            <div className="w-1/2 p-4 flex flex-col justify-center">
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                            <div
                                className="w-1/2 bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${event.imageUrl})` }}
                            >
                                <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-2">
                                    <h3 className="text-white text-xl font-bold">{event.name}</h3>
                                </div>
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
        </div>
        );
    };
    
    export default LandingEvents;
