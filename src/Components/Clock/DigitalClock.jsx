import { useTranslation } from "react-i18next";
import React, {useState, useEffect} from 'react'


const DigitalClock = () => {
    const [t, i18n] = useTranslation("global");
    const [date, setDate] = useState(new Date());

    function refreshClock() {
      setDate(new Date());
    }
  
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);


         

  return (
   <div ><span className="digital">{t("dates.localTimeIs")} {date.toLocaleTimeString()}</span></div> 
  )
}

export default DigitalClock;