import React, {useState} from "react";
import "./Forecast.css";
import "./Weather.css";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";


export default function WeatherForecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {

    return(
<div className="row justify-content-evenly" id="forecast">
            <ForecastPreview data={forecast.list[0]} />
            <ForecastPreview data={forecast.list[1]} />
            <ForecastPreview data={forecast.list[2]} />
            <ForecastPreview data={forecast.list[3]} />
            <ForecastPreview data={forecast.list[4]} />
            </div>
    );
    } else {
    const apiKey="48ddae8355adb729eaa13fbeedf0ff54";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
        