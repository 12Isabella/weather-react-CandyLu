import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import EnterCityForm from "./EnterCityForm";
import WeatherProperties from "./WeatherProperties";
import WeatherIcon from "./WeatherIcon";
import Button from "./Button";
import PlaceAndDate from "./PlaceAndDate";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="row">
            <div className="col-sm">
              <EnterCityForm />
            </div>
            <div className="col-sm">
              <WeatherProperties />
            </div>
            <div className="col-sm">
              <WeatherIcon />
            </div>
          </div>
          <div>
            <Button />
          </div>
          <PlaceAndDate />
        </header>
        <br />
        <main>
          <Forecast />
        </main>
        <br />
        <Footer />
      </div>
    </div>
  );
}
