import React from "react";
import "./PlaceAndDate.css";
export default function PlaceAndDate(props) {
  console.log (props.data.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[props.data.date.getDay()];
  let hours = props.data.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = props.data.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;}
  return (
    <div className="PlaceAndDate">
      <h1>{props.data.city}</h1>
      <h2>
      
      {day} {hours}:{minutes}
    </h2>
    </div>
  );
}
