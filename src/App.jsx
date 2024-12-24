import React from 'react';
import './App.css';
import Speakers from './pages/Speakers';
import Start from './pages/Start';
// Images
import wagon1 from './assets/speaker1.jpg';
import wagon2 from './assets/speaker2.jpg';
import wagon3 from './assets/speaker3.jpg'; // Add more wagons as needed
import wagon4 from './assets/speaker4.jpg';
import wagon5 from './assets/speaker5.jpg';

function App() {
  // Data for train components
  const wagons = [
    { imageUrl: wagon1, title: 'Speaker 1', subtitle: 'Guest Speaker' },
    { imageUrl: wagon2, title: 'Speaker 2', subtitle: 'Keynote Speaker' },
    { imageUrl: wagon3, title: 'Speaker 3', subtitle: 'Panelist' },
    { imageUrl: wagon4, title: 'Speaker 4', subtitle: 'Panelist' },
    { imageUrl: wagon5, title: 'Speaker 5', subtitle: 'Panelist' },
  ];

  return (
    <div className="App">
      <Start />
      <h1>Speakers</h1>
      <Speakers />
    </div>
  );
}

export default App;
