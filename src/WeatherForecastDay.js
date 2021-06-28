import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay (props) {
    return (
        <div>
    <div className="WeatherForecastDay"> Thu </div>
  <WeatherIcon  data= {props.data.weather[0].icon} size={50}/>
       <div className="ForecastTemp">
    <span>{props.data.temp.max}° </span>|
    <span> {props.data.temp.min}°</span>
    </div>
    </div>

    );
}


