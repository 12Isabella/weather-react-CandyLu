import React from "react";
import "./PlaceAndDate.css";
export default function PlaceAndDate(props) {
  
  return (
    <div className="PlaceAndDate">
      <h1>{props.data.city}</h1>
      <h2>on fake date</h2>
    </div>
  );
}
