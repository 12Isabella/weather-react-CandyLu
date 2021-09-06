import React from "react";

export default function TemperatureConversion(props) {
  return (
    <div>
      <span>
        <strong>{props.celsius}</strong> °C
      </span>
    </div>
  );
}
