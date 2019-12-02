import React, {Component} from 'react';
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

class Index extends Component {
    render() {
        return (
            <div className="weatherLocationCont">
                <Location city={"Perú pa el mundo"}/>
                <WeatherData data={data}/>
            </div>
        );
    }
}

export default Index;
