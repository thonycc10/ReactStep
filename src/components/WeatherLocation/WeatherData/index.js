import React from 'react'
import WeatherExtraInfo from "./WeatherExtraInfo";
import Index from "../index";
import  './style.css';

import {
    CLOUDY,
} from "../../../constants/weather"

const WeatherData = () => (
    <div className="watherDataContenedor">
        <Index temperature={"20"} watherState={CLOUDY}/>
        <WeatherExtraInfo humidity={"20"} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;
