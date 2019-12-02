import React from 'react'
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import  './style.css';
import PropTypes from 'prop-types';

const WeatherData = ({data: { temperature, weatherState, humidity, wind } }) => (
    <div className="watherDataContenedor">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
);

WeatherData.prototype = { // shape - objeto que le vamos a esperar con una forma
  data: PropTypes.shape({
      temperature: PropTypes.string.isRequired,
      weatherState: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.string.isRequired,
  })
};


export default WeatherData;
