import React from 'react';
import './text_box.css'; 
import stand from '../assets/stand.png';

const TextBox = ({ title, style }) => {
    return (
        <div className="text-box-container" style={{ ...style, transform: style?.transform }}>
            <div className="stand-container">
                <img src={stand} alt="" />
            </div>
            <div className="big-container">
                <div className="small-container">
                    <div className="text-container" style={{ ...style, transform: style?.transform }}>
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextBox;