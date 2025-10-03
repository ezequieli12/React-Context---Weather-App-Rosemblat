import React from 'react';

const WeatherCard = ({ weather }) => {
  const { main, weather: weatherData, wind, name } = weather;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weatherData[0].description}</p>
      <p>Temperature: {main.temp}°</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
