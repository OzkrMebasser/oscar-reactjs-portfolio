import React, { useState, useEffect } from "react";
import './LocalWeather.css'

const LocalWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const [locationPermission, setLocationPermission] = useState(null);
  const apiKey = "2d0cf0e18db54aef3b1d25048858dfc1";

  useEffect(() => {
    const getWeather = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=es`
        );
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error("Error al obtener datos del clima:", error);
      }
    };

    const handleLocationPermission = (position) => {
      const { latitude, longitude } = position.coords;
      getWeather(latitude, longitude);
      setLocationPermission('granted');
    };

    const handleLocationError = (error) => {
      console.error("Error al obtener la ubicación del usuario:", error);
      setLocationPermission('denied');
    };

    // Obtener la ubicación del usuario
    navigator.geolocation.getCurrentPosition(
      handleLocationPermission,
      handleLocationError
    );
  }, [apiKey]);

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === "°C" ? "°F" : "°C"));
  };

  const convertTemperature = (kelvin) => {
    if (temperatureUnit === "°C") {
      return kelvin - 273.15;
    } else {
      // Convert Kelvin to Fahrenheit
      return (kelvin - 273.15) * (9 / 5) + 32;
    }
  };

  return (
    <div>
      {locationPermission === 'denied' ? (
        <p className="redText">
          El acceso a la ubicación ha sido denegado. La razón de solicitar su ubicación es proporcionar el clima de su ciudad.
        </p>
      ) : weatherData && (
        <div>
          <p>
            La temperatura en {weatherData.name}:{" "}
            {convertTemperature(weatherData.main.temp).toFixed(2)}{" "}
            {temperatureUnit}{" "} <br />
            <span onClick={toggleTemperatureUnit}>
              Cambiar a {temperatureUnit === "°C" ? "°F" : "°C"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LocalWeather;
