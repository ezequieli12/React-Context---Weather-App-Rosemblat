import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
  const [unit, setUnit] = useState(localStorage.getItem('unit') || 'metric');

  const fetchWeather = useCallback(async (city) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    try {
      const response = await axios.get(url);
      setWeather(response.data);
      localStorage.setItem('lastWeather', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  }, [unit]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    localStorage.setItem('unit', newUnit);
  };

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather, mode, setMode: toggleMode, unit, setUnit: toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
