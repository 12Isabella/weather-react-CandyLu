import React from "react";

export default function WeatherIcon(props) {
  let icon = props.icon;
  let weatherData = {
    imgUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`,
  };
  return (
    <img
      className="WeatherIcon"
      src={weatherData.imgUrl}
      alt="/"
      width={props.size}
    />
  );
}
