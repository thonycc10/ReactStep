import React from 'react';
import WeatherData  from "./WheatherData";
import Location from "./Location";

const WeatherLocation = () => (
    <div>
        <Location city={"Perú pa el mundo"} />
        <WeatherData />
    </div>
);

export default WeatherLocation;
