import React, {useState} from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
    const [unit,setUnit]=useState("celsius");

    function showFahrenheit(event){
        event.preventDefault()
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault()
        setUnit("celsius");
    }

    function fahrenheit(){
        return (props.celsius*9)/5+32;
    }

    if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
        <span id="temperature">
                <strong>{Math.round(props.celsius)}°</strong>
              </span>

              <span id="unit"> C{" "}|{""}<a href="/" onClick={showFahrenheit}> F</a></span>
             </div>
              );
            } else {
                return (
                   <div className="WeatherTemperature">
                <span id="temperature">
                <strong>{Math.round(fahrenheit())}°</strong>
              </span>

              <span id="unit"><a href="/" onClick={showCelsius}>C </a>{""}| {""}F</span>
             </div> 
                )
            }
        }
