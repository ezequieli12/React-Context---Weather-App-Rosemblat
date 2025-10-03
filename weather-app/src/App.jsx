import React, { useState, useEffect, useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import ModeToggle from './components/ModeToggle';
import './styles.css';

const App = () => {
  const { weather, fetchWeather, mode, setMode } = useContext(WeatherContext);

  useEffect(() => {
    fetchWeather('Buenos Aires');
  }, [fetchWeather]);

  return (
    <div className={`app ${mode}`}>
      <Header />
      <ModeToggle />
      {weather ? <WeatherCard weather={weather} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
