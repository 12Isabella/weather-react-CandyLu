import React, {useState, useEffect} from "react";
import "./Forecast.css";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function Forecast(props) {

  let [ForecastLoaded, setForecastLoaded]= useState(false);
 
  let [forecast, setForecast] = useState(null);
 
  useEffect(() => {
    setForecastLoaded(false);
  }, [props.coordinates]);

function handleCall (response) {
  setForecast(response.data.daily);
  setForecastLoaded (true);
}

if (ForecastLoaded) {
  return (<div className="Forecast">
    <div className="row">
  {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {return null;}
          })}
      </div>
    </div>); } else {

       let apiKey = "2ac6514991aa99cb91e321c9b9758eb6";
   let lon= props.coordinates.lon;
   let lat=  props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

   axios.get(apiUrl).then(handleCall);
   return null;
   
    }}
   
