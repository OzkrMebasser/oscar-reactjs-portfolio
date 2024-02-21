import React, { useState, useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";
import { FaExchangeAlt } from "react-icons/fa";

import "./LocalWeather.css";

const LocalWeather = () => {
  const [t, i18n] = useTranslation("global");
  const [weatherData, setWeatherData] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("°C");
  const [locationPermission, setLocationPermission] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
  const apiKey = process.env.REACT_APP_API_KEY_OPENWEATHER;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=es`,
          { signal: abortController.signal }
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted due to component unmount');
        } else {
          console.error("Error fetching weather data:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    const handleLocationPermission = (position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
      fetchData();
      setLocationPermission("granted");
    };

    const handleLocationError = (error) => {
      console.error("Error obtaining user location:", error);
      setLocationPermission("denied");
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(
      handleLocationPermission,
      handleLocationError
    );

    return () => {
      abortController.abort();
    };
  }, [latitude, longitude, apiKey]);

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === "°C" ? "°F" : "°C"));
  };

  const convertTemperature = (kelvin) => {
    if (temperatureUnit === "°F") {
      return (kelvin - 273.15) * (9 / 5) + 32;
    } else {
      return kelvin - 273.15;
    }
  };

  const handleExplanationClick = () => {
    setShowExplanation((prevValue) => !prevValue);
  };

  const WeatherContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (locationPermission === "denied") {
      return (
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
              {t("cover.reqLocP_1")}{" "}
              <a
                className="openWeatherlink"
                href="https://openweathermap.org/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenWeather.org
              </a>{" "}
              {t("cover.reqLocP_2")}
              <br />
              *{t("cover.reqLocP_3")} {t("cover.reqLocP_4")}
              <a
                className="openWeatherlink"
                href="https://openweather.co.uk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cover.reqLocP_5")}
              </a>
            </p>
          )}
        </div>
      );
    }

    if (weatherData) {
      return (
        <div>
          <p>
            {t("cover.temperature")} {weatherData.name} {t("cover.isTemp")}{" "}
            {convertTemperature(weatherData.main.temp).toFixed(2)}{" "}
            {temperatureUnit}{" "}
            <span className="changeToF" onClick={toggleTemperatureUnit}>
              <FaExchangeAlt style={{ margin: "0 1px" }} />
              {temperatureUnit === "°C" ? "°F" : "°C"}
            </span>
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <WeatherContent />
      <ReactTooltip anchorId="geoLocation" />
    </>
  );
};

export default LocalWeather;
