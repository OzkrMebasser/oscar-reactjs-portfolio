// FlipCard.jsx
import React, { useState } from 'react';
import './FlipCard.css';

const FlipCard = ({ frontImage, backImage, title, description }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`cardSkills-item ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-cardSkills" onClick={handleCardClick}>
        <div className={`flip-cardSkills-front text-center`} style={{ backgroundImage: `url(${frontImage})` }}>
          <div className="inner color-white">
            <h3 className="flip-cardSkills-header">{title}</h3>
            {/* Línea en el lado derecho en forma de L invertida */}
            {/* <div className="right-l-shape"></div> */}
            {/* Línea en el lado izquierdo en forma de L normal */}
            {/* <div className="left-l-shape"></div> */}
            <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-cardSkills-img" />
          </div>
        </div>
        <div className={`back-image-blur flip-cardSkills-back text-center`} style={{ backgroundImage: `url(${backImage})` }}>
          <div className="inner color-white">
            {/* <h3 className="flip-cardSkills-header">{title}</h3> */}
            <p>{description}</p>
            {/* <button className="flip-cardSkills-button" onClick={handleCardClick}>Learn More</button> */}
          </div>
        </div>
      </div>
    </div>
  );

};

export default FlipCard;
