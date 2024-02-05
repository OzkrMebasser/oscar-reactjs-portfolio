import React, { useState, useEffect } from 'react';

const LocalWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState('C');
  const apiKey = '2d0cf0e18db54aef3b1d25048858dfc1'; 

  useEffect(() => {
    const getWeather = async (latitude, longitude) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=es`);
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error('Error al obtener datos del clima:', error);
      }
    };

    // Obtener la ubicación del usuario
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getWeather(latitude, longitude);
      },
      (error) => {
        console.error('Error al obtener la ubicación del usuario:', error);
      }
    );
  }, [apiKey]);

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  const convertTemperature = (kelvin) => {
    if (temperatureUnit === 'C') {
      return kelvin - 273.15;
    } else {
      // Convert Kelvin to Fahrenheit
      return (kelvin - 273.15) * (9 / 5) + 32;
    }
  };

  return (
    <div >
   
      {weatherData && (
        <div>
          <p>La temperatura en {weatherData.name}: {convertTemperature(weatherData.main.temp).toFixed(2)} °{temperatureUnit} {" "} <button onClick={toggleTemperatureUnit}>
            Cambiar a {temperatureUnit === 'C' ? 'F' : 'C'}
          </button></p>
         
        </div>
      )}
    </div>
  );
};

export default LocalWeather;
