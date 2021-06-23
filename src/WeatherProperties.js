import React from "react";
import "./WeatherProperties.css";
import TemperatureConversion from  "./TemperatureConversion";
export default function WeatherProperties(props) {
  
  
  return (
    <div className="WeatherProperties">
      <ul>
        <li>
         <TemperatureConversion celsius={props.data.temperature}/>
          </li>
        <li>{props.data.description}</li>
        <li>Feels like: {props.data.feelslike} C°</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} m/s</li>
      </ul>
    </div>
  );
}
