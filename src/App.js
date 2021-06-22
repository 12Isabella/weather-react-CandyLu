import React, {useState} from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherProperties from "./WeatherProperties";
import WeatherIcon from "./WeatherIcon";
import Button from "./Button";
import PlaceAndDate from "./PlaceAndDate";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  let [city, setCity]= useState ("Oslo");
  let [weatherData, setWeatherData]= useState({ready:false});

function handleResponse (response) {
  console.log (response.data);
  setWeatherData ({
    ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      feelslike: Math.round(response.data.main.feels_like),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date (response.data.dt * 1000),
    

       });
}

function handleSubmit (event) {
  event.preventDefault ();
  search ();
}

 function handleCityChange(event) {
setCity(event.target.value);
  }

function search () {
  let apiKey = "2ac6514991aa99cb91e321c9b9758eb6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

if (weatherData.ready){
  return (
    <div className="App">
      <div className="interface">
      <div className="container">
        <header>
          <div className="row">
            <div className="col-sm">
             <div className="input-group mb-3">
      <div className="input-group-prepend"></div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleCityChange} 
          placeholder="Enter city"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          autoFocus="on"
        />
      </form>
    </div>
            </div>
            <div className="col-sm">
              <WeatherProperties data={weatherData} />
            </div>
            <div className="col-sm">
              <WeatherIcon data={weatherData} />
            </div>
          </div>
          <div>
            <Button />
          </div>
          <PlaceAndDate data={weatherData}/>
        </header>
        <br />
        <main>
          <Forecast />
        </main>
        <br />
        
      </div>
       </div>
      <Footer />
    </div>
    
  );
} else {
  search ();
  return "Loading..."}
}
