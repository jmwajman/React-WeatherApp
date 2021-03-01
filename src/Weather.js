import React, {useState} from 'react';
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
 
  const[weatherData,setWeatherData] = useState({ready:false});
  
  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      day: "Monday",
      time: "10:02",
      description: response.data.weather[0].description,
      iconUrl:"http://openweathermap.org/img/wn/04n@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
    })
  }

  if (weatherData.ready){
    return (
    <div className="Weather">
      <div className="container-lg">
        <div className="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Type the location..."
            id="search-input"
            aria-label="Recipient's username with two button addons"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="look-for-place"
          >
            <span role="img" aria-label="magnifying glass">
              🔍
            </span>
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="location"
          >
            My location
          </button>
        </div>
        <h2>{weatherData.city}</h2>
        <div className="row justify-content-around">
          <div className="col-6">
            
            <span id="temperature">
                <strong>{Math.round(weatherData.temperature)}°</strong>
              </span>
              <span id="celsfahr"><a href="/">C </a>| <a href="/">F</a></span>
              
            <p>{weatherData.description}</p>
            
          </div>
          <div className="col-6" id="valueColumns">
            <h5>
              Humidity: <span>{weatherData.humidity}</span>%
            </h5>
            <h5>
              Wind: <span>{Math.round(weatherData.wind)}</span> km/h
            </h5>
            <h5>
              Pressure: <span>{weatherData.pressure}</span> hPa
            </h5>
          </div>
          <h3>
              Last updated on {weatherData.day} at {weatherData.time}
            </h3>
          <Forecast />
        </div>
      </div>
    </div>
  );
} else {
  const apiKey="48ddae8355adb729eaa13fbeedf0ff54";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}
}


