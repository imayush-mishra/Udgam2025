import React from 'react';
import myImage from '../assets/merch.jpg';
import './Merch.css'

const Merch = () => {
  return (
    <div className="merch-station-wrapper">
    <h2>I WANT IT!</h2>
  <div className="Buy">
    <a href='/'>BUY NOW </a>
    </div>

   <img className="photos" src={myImage} alt="hi" />

    </div>
    
  )}



  export default Merch;