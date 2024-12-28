import React from 'react';
import './App.css';
import Speakers from './pages/Speakers';
import Start from './pages/Start';
import TextBox from './component/text_box';
import NavBar from './component/nav_bar';
import Merch from './pages/Merch';
import FAQSection from './component/inquiry_desk';
import LandingSponsors from './component/landing_sponsors';
import LandingEvents from './component/landing_event.jsx';
import WhatIsUdgam from './component/whatisudgam';
import Footer from './pages/footer';  


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

  // const textBoxTitle = 'Speakers';

  return (
    <div className="App">
      <NavBar />
      <Start />
      <TextBox title={"What is Udgam?"} style={{ paddingTop: '10px' }}/>
      <WhatIsUdgam />
      <TextBox title={"Events Stations"} style={{ transform: 'rotate(180deg)' }} />
      <LandingEvents />
      <TextBox title={"Merch Stations"}/>
      {/* <Merch /> */}
      <TextBox title={"Speakers Express"} style={{ transform: 'rotate(180deg)' }} />
      <Speakers />
      <TextBox title={"Our Sponsors"}/>
      <LandingSponsors />
      <TextBox title={"Inquiry Station"} style={{ transform: 'rotate(180deg)' }} />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
