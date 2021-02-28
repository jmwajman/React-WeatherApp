import React from 'react';
import axios from "axios";
import "./Forecast.css";
import "./Weather.css";


export default function Forecast(){
    return(
<div className="row justify-content-evenly" id="forecast">
            <div className="col-2">
              <h4>Monday</h4>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                width="40"
                class="picture"
                alt="weather"
              />
              <h6>
                {" "}
                4° / <strong> 2°</strong>
              </h6>
            </div>
            <div className="col-2">
              <h4>Tuesday</h4>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                width="40"
                class="picture"
                alt="weather"
              />
              <h6>
                {" "}
                3° / <strong> 2°</strong>
              </h6>
            </div>
            <div className="col-2">
              <h4>Wednesday</h4>
              <img
                src="http://openweathermap.org/img/wn/03d@2x.png"
                width="40"
                class="picture"
                alt="weather"
              />
              <h6>
                {" "}
                4° / <strong> 0°</strong>
              </h6>
            </div>
            <div className="col-2">
              <h4>Thursday</h4>
              <img
                src="https://openweathermap.org/img/wn/02n@2x.png"
                width="40"
                class="picture"
                alt="weather"
              />
              <h6>
                {" "}
                2° / <strong> 1°</strong>
              </h6>
            </div>
            <div className="col-2">
              <h4>Friday</h4>
              <img
                src="https://openweathermap.org/img/wn/02n@2x.png"
                width="40"
                class="picture"
                alt="weather"
              />
              <h6>
                {" "}
                2° / <strong> -1°</strong>
              </h6>
            </div>
          </div>
    )
}