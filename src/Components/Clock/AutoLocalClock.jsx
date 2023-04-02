import AnalogClock from 'analog-clock-react';
import '../../pages/Home/Home.css'

const AutoLocalClock = (props) => {


    let options = {
        width: "130px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#d4af37",
        centerColor: "#000",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#FF0000",
          minute: "#ffffff",
          hour: "#ffffff"
        }
      };



  return (
    <div className="analog">
        <AnalogClock  {...options} />
        
        

    </div>
    
  )
}

export default AutoLocalClock;
