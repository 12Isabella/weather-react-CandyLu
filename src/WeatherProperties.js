import React from "react";
import "./WeatherProperties.css";
export default function WeatherProperties(props) {
  
  
  return (
    <div className="WeatherProperties">
      <ul>
        <li>
          <strong>{props.data.temperature}</strong>
          <span>°C</span>
        </li>
        <li>{props.data.description}</li>
        <li>Feels like: {props.data.feelslike} C°</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} m/s</li>
      </ul>
    </div>
  );
}
