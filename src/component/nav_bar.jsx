import React, { useState } from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main w-full">
      <nav className="flex justify-between items-center pl-4 p-2 bg-blue-500">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-4 h-11" />
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-white hover:text-blue-300 hover:scale-110 transform transition-all duration-300 ease-in-out text-xl">Home</a>
          <a href="events" className="text-white hover:text-blue-300 hover:scale-110 transform transition-all duration-300 ease-in-out text-xl">Events</a>
          <a href="schedule" className="text-white hover:text-blue-300 hover:scale-110 transform transition-all duration-300 ease-in-out text-xl">Schedule</a>
          <a href="sponsors" className="text-white hover:text-blue-300 hover:scale-110 transform transition-all duration-300 ease-in-out text-xl">Sponsors</a>
          <a href="speakers" className="text-white hover:text-blue-300 hover:scale-110 transform transition-all duration-300 ease-in-out text-xl">Speakers</a>
          <a href="team" className="text-white hover:text-blue-300 hover:scale-110 transform transition-all duration-300 ease-in-out text-xl">Our Team</a>
          <button className="text-black bg-white px-4 py-2 rounded-md hover:bg-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out text-xl">Buy Tickets</button>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-500 p-10">
          <a href="#" className="text-white py-2 text-xl">Home</a>
          <a href="events" className="text-white py-2 text-xl">Events</a>
          <a href="schedule" className="text-white py-2 text-xl">Schedule</a>
          <a href="sponsors" className="text-white py-2 text-xl">Sponsors</a>
          <a href="speakers" className="text-white py-2 text-xl">Speakers</a>
          <a href="team" className="text-white py-2 text-xl">Our Team</a>
          <button className="text-black bg-white px-4 py-2 rounded-md hover:bg-blue-300 hover:scale-105 transform transition-all duration-300 ease-in-out text-xl">Buy Tickets</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;