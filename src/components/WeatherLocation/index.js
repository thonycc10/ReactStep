import React from "react"
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
    SUN,
} from "../../constants/weather"


const getWeatherIcon = weatherState => {
    if (weatherState)
        return <WeatherIcons name={weatherState} size="2x"/>;
    else
        return <WeatherIcons name={SUN} size="2x"/>;
};

const Index = ({ temperature, watherState}) => (
    <div>
        {
            getWeatherIcon(watherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

Index.prototype = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default Index;
