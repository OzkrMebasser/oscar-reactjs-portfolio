import AnalogClock,  { Themes } from 'react-analog-clock';

const ClockAnalog = () => {
    return (
        <div className='analog'>
        <AnalogClock 
          width={130} 
          height={130} 
      
          theme={Themes.dark} 
          showSmallTicks={true} 
          showSeconds={true} 
        
        />
        </div>
      
      )
  }

export default ClockAnalog;
