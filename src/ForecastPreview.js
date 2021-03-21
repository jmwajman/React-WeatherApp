import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastPreview (props){

function hours(){
    let date = new Date(props.data.dt*1000);
    let hours=date.getHours();
    return (
    <div>
   <h4>{hours}:00</h4>
   </div>
    );
}

function temperature(){
    let temperature= Math.round(props.data.main.temp);
    return (
        <div><h6>{temperature} °C</h6></div>
    );
}

return(
    <div className="col-2">
              {hours()}
              <WeatherIcon code = {props.data.weather[0].icon} />
            {temperature()}
            </div>
);
}