import React, {useState} from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {

  //let [forecastLoaded, setForecastLoaded]= useState(false);
  let [coordinates, setCoordinates] = useState(""); 
  
function handleCall (response) {
  console.log(`handleForecastCall`, response.data);
  setCoordinates (props.coordinates);
}

if (props.coordinates === coordinates ) {
  return (<div className="Forecast">
    <div className="row">
      <div className="col">
        <div className="ForecastDay"> Thu </div>
  <WeatherIcon  data={{icon:"02d"}} size={50}/>
       <div className="ForecastTemp">
    <span>19° </span>|<span> 10°</span>
    </div>
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
   
