import React from 'react';
import WeatherData  from "./WheatherData";
import Location from "./Location";
import PropTypes from 'prop-types';
const WeatherLocation = () => (
    <div>
        <Location city={"Perú pa el mundo"} />
        <WeatherData />
    </div>
);
WeatherLocation.prototype = {
  city: PropTypes.string.isRequired,
};
export default WeatherLocation;
