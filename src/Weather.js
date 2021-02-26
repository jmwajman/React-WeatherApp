import React from 'react';
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Wroclaw",
    temperature: 13,
    day: "Monday",
    time: "10:02",
    description: "Rainy",
    imgUrl: "https://www.flaticon.com/svg/static/icons/svg/606/606801.svg",
    humidity: 90,
    wind: 5,
    pressure: 1010
  };

  return (
    <div className="Weather">
      <div className="container-lg">
        <h1>Do you need the umbrella?</h1>
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

        <div className="row justify-content-around">
          <div className="col-6">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/606/606801.svg"
              id="icon"
              width="60"
              alt=" current weather"
            />
            <p>{weatherData.description}</p>
            <h2>{weatherData.city}</h2>
            <h3>
              Last updated on {weatherData.day} at {weatherData.time}
            </h3>
          </div>
          <div className="col-6" id="valueColumns">
            <h5>
              Temperature:{" "}
              <span id="temperature">
                <strong>{weatherData.temperature}</strong>
              </span>
              ° <a href="/">C </a>| <a href="/">F</a>
            </h5>
            <h5>
              Humidity: <span>{weatherData.humidity}</span>%
            </h5>
            <h5>
              Wind: <span>{weatherData.wind}</span> km/h
            </h5>
            <h5>
              Pressure: <span>{weatherData.pressure}</span> hPa
            </h5>
          </div>
          <br />
          <div className="row justify-content-evenly" id="forecast">
            <div className="col-2">
              <h4>Monday</h4>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/606/606801.svg"
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
                src="https://www.flaticon.com/svg/static/icons/svg/606/606795.svg"
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
                src="https://www.flaticon.com/svg/static/icons/svg/606/606802.svg"
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
                src="https://www.flaticon.com/svg/static/icons/svg/606/606799.svg"
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
                src="https://www.flaticon.com/svg/static/icons/svg/606/606799.svg"
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
        </div>
      </div>
    </div>
  );
}
