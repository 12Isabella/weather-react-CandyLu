import React from "react";
import "./WeatherIcon.css";
export default function WeatherIcon(props) {
  console.log (props.data.icon)
  let weatherData = {
    imgUrl: props.data.icon
  };
  return <img className="WeatherIcon" src={weatherData.imgUrl} alt="Clear" />;
}
