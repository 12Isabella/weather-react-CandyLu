import React, {useState} from "react";
import "./Forecast.css";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function Forecast(props) {

  let [ForecastLoaded, setForecastLoaded]= useState(false);
 
  let [forecast, setForecast] = useState(null);
  
function handleCall (response) {
  console.log(`handleForecastCall`, response.data);
  setForecast(response.data.daily);
  console.log (forecast);
  setForecastLoaded (true);
}

if (ForecastLoaded) {
  console.log (forecast);
  return (<div className="Forecast">
    <div className="row">
      <div className="col">
  <WeatherForecastDay data={forecast[0]} />      
        </div>
      </div>
    </div>); } else {

       let apiKey = "2ac6514991aa99cb91e321c9b9758eb6";
   let lon= props.coordinates.lon;
   let lat=  props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

   axios.get(apiUrl).then(handleCall);
   return null;
   
    }}
   
