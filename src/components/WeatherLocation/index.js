import React, {Component} from 'react';
import WeatherData  from "./WeatherData";
import Location from "./Location";
import convert from "convert-units";
import './style.css';
import { WINDY } from "../../constants/weather";
const location = "Lima,pe";
const api_key = "8528aa9ca8113072c19255336296869f";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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
    getTemp = keivin => {
      return Number(convert(keivin).from("K").to("C")).toFixed(0);
    };
    getWeatherState = weather_data => {
      return WINDY;
    };
    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);
        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        };
        return data;
    };

    handleUpdateClick = () => {
        fetch(api_weather).then( resolver => {
           return resolver.json();
        }).then(data => {
            const newWeather = this.getData(data);
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
