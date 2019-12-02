import React from 'react';
import WeatherData  from "./WeatherData";
import Location from "./Location";
import PropTypes from 'prop-types';
import './style.css';
import { WINDY } from "../../constants/weather";

const data = {
    temperature: 5,
    weatherState: WINDY,
    humidity: 10,
    wind: '10 m/s',
};

const Index = () => (
    <div className="weatherLocationCont">
        <Location city={"Perú pa el mundo"} />
        <WeatherData data={data}/>
    </div>
);
Index.prototype = {
  city: PropTypes.string.isRequired,
};
export default Index;
