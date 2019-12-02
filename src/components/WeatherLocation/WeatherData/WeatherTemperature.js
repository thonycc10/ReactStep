import React from "react"
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
    SUN,
} from "../../../constants/weather";
import './style.css';

const getWeatherIcon = weatherState => {
    if (weatherState)
        return <WeatherIcons className="wicon" name={weatherState} size="2x"/>;
    else
        return <WeatherIcons className="wicon" name={SUN} size="2x"/>;
};

const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className="watherIndexContenedor">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">C°</span>
    </div>
);

WeatherTemperature.prototype = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
