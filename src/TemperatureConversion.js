import React, {useState} from "react";

export default function TemperatureConversion (props) {
let [unit, setUnit]= useState ("celsius");

function showFTemp (event) {
    event.preventDefault ();
    setUnit ("fahrenheit");
 }


    function showCTemp (event) {
        event.preventDefault ();
        setUnit ("celsius");
    }



    if (unit==="celsius"){
    return (
    <div>
        <span>
        <strong>{props.celsius}</strong> °C | <a onClick={showFTemp} href="/">°F</a>
        </span>
        </div>);}
        else {
            let fahrenheitTemp = Math.round((props.celsius * 9/5) + 32)
            return (
            <div>
        <span>
        <strong>{fahrenheitTemp}</strong><a onClick={showCTemp} href="/"> °C </a>| °F
        </span>
        </div>);}}

