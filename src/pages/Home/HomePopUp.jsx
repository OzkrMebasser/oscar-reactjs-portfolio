import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import WelcomePopUp from "../../Components/WelcomePopUp/WelcomePopUp.jsx";
import Home from "./Home.jsx";
import SoundClick from "../../Components/Click/interface.mp3";
import useSound from "../../context/hook/useSound.js";

import "./Home.css";

const HomePopUp = ({ handleClose }) => {
  const [t, i18n] = useTranslation("global");
  const [showChart, setShowChart] = useState(false);
  const [showPopUp, setShowPopUp] = useState(true);
  const playSound = useSound(SoundClick);

  const handleClick = () => {
    setShowPopUp(false);
  };

  return (
    <div className="cover-container">
      {showPopUp ? (
        <WelcomePopUp
          trigger={showPopUp}
          setTrigger={setShowPopUp}
          onClose={() => setShowChart(true)}
          setShowChart={setShowChart}
        />
      ) : showChart ? (
        <Home />
      ) : null}
    </div>
  );
};

export default HomePopUp;
