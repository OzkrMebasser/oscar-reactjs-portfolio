import React, { useState } from "react";
import { MdSwipeLeft } from "react-icons/md";

import "./FlipCard.css";

const FlipCard = ({ frontImage, backImage, title, description }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`cardSkills-item ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-cardSkills" onClick={handleCardClick}>
        <div
          className={`flip-cardSkills-front text-center`}
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className="inner color-white">
            <h3 className="flip-cardSkills-header">{title}</h3>

          
              <MdSwipeLeft className="flip-cardSkills-icon"/>
          
            {/* <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-cardSkills-img" /> */}
          </div>
        </div>
        <div
          className={` flip-cardSkills-back text-center`}
          style={{ backgroundImage: `url(${backImage})` }}
        >
          <div className="inner color-white">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
