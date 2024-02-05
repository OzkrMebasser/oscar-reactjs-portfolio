import React, { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { FaExchangeAlt } from "react-icons/fa";

import "./LocalWeather.css";

const LocalWeather = () => {
  const [t, i18n] = useTranslation("global");
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const [locationPermission, setLocationPermission] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY_OPENWEATHER;

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
      setLocationPermission("granted");
    };

    const handleLocationError = (error) => {
      console.error("Error al obtener la ubicación del usuario:", error);
      setLocationPermission("denied");
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

  const handleExplanationClick = () => {
    setShowExplanation((prevValue) => !prevValue);
  };

  return (
    <>
      {locationPermission === "denied" ? (
        <div>
          <button
            className="explainationBtn bounce-in-top"
            onClick={handleExplanationClick}
          >
            {showExplanation
              ? `${t("cover.closeExp")}`
              : `${t("cover.reqLocation")}`}
          </button>
          {showExplanation && (
            <p className="explainationText">
              {/*reqLocP_1*/}
              {t("cover.reqLocP_1")}{" "}
              <a
                className="openWeatherlink"
                href="https://openweathermap.org/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenWeather.org
              </a>{" "}
              {/*reqLocP_2*/}
              {t("cover.reqLocP_2")}
              <br />
              {/*reqLocP_3*/}
              *{t("cover.reqLocP_3")}{" "}{t("cover.reqLocP_4")}
              <a
                className="openWeatherlink"
                href="https://openweather.co.uk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/*reqLocP_5*/}
                {t("cover.reqLocP_5")}
              </a>
            </p>
            
          )}
        </div>
      ) : (
        weatherData && (
          <div>
            <p>
            {t("cover.temperature")} {weatherData.name} {t("cover.isTemp")}{" "}
              {convertTemperature(weatherData.main.temp).toFixed(2)}{" "}
              {temperatureUnit}{" "}
              <span className="changeToF" onClick={toggleTemperatureUnit}>
                <FaExchangeAlt style={{ margin: "0 1px " }} />
                {temperatureUnit === "°C" ? "°F" : "°C"}
              </span>
            </p>
          </div>
        )
      )}
      <ReactTooltip anchorId="geoLocation" />
    </>
  );
};

export default LocalWeather;
