import React from 'react';
import './App.css';
import Weather from "./Weather";

  
export default function App() {
  return (
    
    <div className="App">
        <Weather defaultCity="Berlin"/>
      <footer>
        <a href="https://github.com/jmwajman/React-WeatherApp" className="footer">
          Open-source
        </a>{" "}
        code by JM Wajman
      </footer>
    </div>
  );
}


