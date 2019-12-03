import React from 'react';
import convert from "convert-units";
import {WINDY} from "../constants/weather";


const getTemp = keivin => {
    return Number(convert(keivin).from("K").to("C")).toFixed(0);
};

const getWeatherState = weather_data => {
    return WINDY;
};

const transforWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    };
    return data;
};

export default transforWeather;
