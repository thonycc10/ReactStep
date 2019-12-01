import React from 'react'
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={"20"} watherState={""}/>
        <WeatherExtraInfo humidity={"20"} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;
