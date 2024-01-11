import { useEffect, useRef } from 'react';

const useSound = (soundFile) => {
  const audioRef = useRef(new Audio(soundFile));

  const playSound = () => {
    const audio = audioRef.current;
    audio.currentTime = 0; 
    audio.play();
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.preload = 'auto';

    return () => {
      
      audio.pause();
    };
  }, []);

  return playSound;
};

export default useSound;
