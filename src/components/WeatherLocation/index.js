import React, {Component} from 'react';
import WeatherData  from "./WeatherData";
import Location from "./Location";
import PropTypes from 'prop-types';
import './style.css';
import { WINDY, SNOW } from "../../constants/weather";

const data = {
    temperature: 5,
    weatherState: WINDY,
    humidity: 10,
    wind: '10 m/s',
};
const data2 = {
    temperature: 9,
    weatherState: SNOW,
    humidity: 10,
    wind: '20 m/s',
};

class Index extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Perú',
            data: data,
        }
    }

    handleUpdateClick = () => {
        console.log("actualizar");
        this.setState({
            city: 'Perú!!!',
            data: data2,
        });
    };

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default Index;
