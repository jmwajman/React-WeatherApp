import React, {useState} from 'react';
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
 
  const[weatherData,setWeatherData] = useState({ready:false});
  const[city,setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      iconUrl:"http://openweathermap.org/img/wn/04n@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
    })
  }



function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
setCity(event.target.value);
}

function search(){
  const apiKey="48ddae8355adb729eaa13fbeedf0ff54";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
  if (weatherData.ready){
    return (
    <div className="Weather">
      <div className="container-lg">
          <form className="input-group"
          onSubmit={handleSubmit}>
          <input
            type="text"
            class="form-control"
            placeholder="Type the location..."
            id="search-input"
            aria-label="Recipient's username with two button addons"
            onChange ={handleCityChange}
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
        
        
        </form>
        <WeatherInfo data={weatherData}/>
      </div>
    </div>
  );
} else {
 search();
  return "Loading...";
}
}


