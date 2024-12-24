import React from 'react';
import Wagon from '../component/wagon'
import './Speakers.css';

// Images
import wagon1 from '../assets/speaker1.jpg';
import wagon2 from '../assets/speaker2.jpg';
import engine from '../assets/engine.png';
import engine2 from '../assets/engine2.png';
import wagon3 from '../assets/speaker3.jpg'; // Add more wagons as needed
import wagon4 from '../assets/speaker4.jpg';
import wagon5 from '../assets/speaker5.jpg';

function Speakers() {
  // Data for train components
  const wagons = [
    { imageUrl: wagon1, title: 'Speaker 1', subtitle: 'Guest Speaker' },
    { imageUrl: wagon2, title: 'Speaker 2', subtitle: 'Keynote Speaker' },
    { imageUrl: wagon3, title: 'Speaker 3', subtitle: 'Panelist' },
    { imageUrl: wagon4, title: 'Speaker 4', subtitle: 'Panelist' },
    { imageUrl: wagon5, title: 'Speaker 5', subtitle: 'Panelist' },
  ];

  return (
    <div className="train-wrapper">


      <div className="train-container">
        <div className="engine" style={{ transform: 'translateY(10px)' }}>
          <img src={engine} alt="Front Engine" />
        </div>
        {wagons.map((wagon, index) => (
          <Wagon
            key={index}
            imageUrl={wagon.imageUrl}
            title={wagon.title}
            subtitle={wagon.subtitle}
          />
        ))}
        <div className="engine" style={{ transform: 'translateY(8px)' }}>
          <img src={engine2} alt="Back Engine" />
        </div>
      </div>
    </div>
  );
}

export default Speakers;
