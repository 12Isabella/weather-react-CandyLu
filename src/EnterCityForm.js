import React from "react";
import "./EnterCityForm.css";

export default function EnterCityForm() {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend"></div>
      <form className="EnterCityForm">
        <input
          placeholder="Enter city"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          autoFocus="on"
        />
      </form>
    </div>
  );
}
