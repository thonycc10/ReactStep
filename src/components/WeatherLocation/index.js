import React, {Component} from 'react';
import WeatherData  from "./WeatherData";
import Location from "./Location";
import transforWeather from "../../service/transforWeather"
import './style.css';
import { WINDY } from "../../constants/weather";
import { api_weather } from "../../service/api_url";

const data = {
    temperature: 5,
    weatherState: WINDY,
    humidity: 10,
    wind: '10 m/s',
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
        fetch(api_weather).then( resolver => {
           return resolver.json();
        }).then(data => {
            const newWeather = transforWeather(data);
            debugger
            this.setState({
                data: newWeather
            });
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
