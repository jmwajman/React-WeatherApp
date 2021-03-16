import React from "react";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
   return ( 
   <div className="WeatherInfo">
   <h2>{props.data.city}</h2>
        <div className="row justify-content-around">
          <div className="col-6">
            
            <span id="temperature">
                <strong>{Math.round(props.data.temperature)}°</strong>
              </span>
              <span id="celsfahr"><a href="/">C </a>| <a href="/">F</a></span>
              
            <p>{props.data.description}</p>
            
          </div>
          <div className="col-6" id="valueColumns">
            <h5>
              Humidity: <span>{props.data.humidity}</span>%
            </h5>
            <h5>
              Wind: <span>{Math.round(props.data.wind)}</span> km/h
            </h5>
            <h5>
              Pressure: <span>{props.data.pressure}</span> hPa
            </h5>
          </div>
          <h3>
              <FormattedDate date ={props.data.date}/>
            </h3>
          <Forecast />
        </div>
        </div>
)
}