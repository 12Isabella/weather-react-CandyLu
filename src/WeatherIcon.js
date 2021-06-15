import React from "react";
import "./WeatherIcon.css";
export default function WeatherIcon() {
  let weatherData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  return <img className="WeatherIcon" src={weatherData.imgUrl} alt="Clear" />;
}
