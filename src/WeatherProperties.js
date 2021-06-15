import React from "react";
import "./WeatherProperties.css";
export default function WeatherProperties() {
  let weatherData = {
    temp: 22,
    description: "Sunny",
    humidity: 40,
    wind: 1.3
  };
  return (
    <div className="WeatherProperties">
      <ul>
        <li>
          <strong>{weatherData.temp}</strong>
          <span>°C</span>
        </li>
        <li>{weatherData.description}</li>
        <li>Feels like: 14 C°</li>
        <li>Humidity: {weatherData.humidity}%</li>
        <li>Wind: {weatherData.wind} m/s</li>
      </ul>
    </div>
  );
}
