import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";


export default function Forecast(props) {
  return <div className="Forecast">
    <div className="row">
      <div className="col">
        <div className="ForecastDay"> Thu </div>
  <WeatherIcon  data={{icon:"02d"}} size={50}/>
       <div className="ForecastTemp">
    <span>19° </span>|<span> 10°</span></div>
        </div>
      </div>
    </div>;
}
