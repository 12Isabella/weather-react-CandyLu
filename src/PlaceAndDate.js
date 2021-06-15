import React from "react";
import "./PlaceAndDate.css";
export default function PlaceAndDate() {
  let weatherData = {
    city: "Oslo",
    date: "Monday, 04.06.2021"
  };
  return (
    <div className="PlaceAndDate">
      <h1>{weatherData.city}</h1>
      <h2>on {weatherData.date}</h2>
    </div>
  );
}
