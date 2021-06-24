import React from "react";



export default function WeatherIcon(props) {
  let weatherData = {
    imgUrl: `https://openweathermap.org/img/wn/${props.data.icon}.png`
  };
  return <img className="WeatherIcon" src={weatherData.imgUrl} alt="/" width={props.size} />;
 
}
