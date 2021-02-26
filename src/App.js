import React from 'react';
import './App.css';
import Weather from "./Weather";

  
function App() {
  return (
    <div className="App">
        <Weather />
      <footer>
        <a href="https://github.com/jmwajman/React-WeatherApp" class="footer">
          Open-source
        </a>{" "}
        code by JM Wajman
      </footer>
    </div>
  );
}

export default App;
