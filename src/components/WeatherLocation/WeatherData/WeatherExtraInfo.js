import React from "react"
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({humidity, wind}) => (
   <div className="watherExtraInfoContenedor">
        <span className="extraInfoTest">Humedad: {`${humidity} % - `}</span>
        <span className="extraInfoTest">Viento: {`${wind} wind`}</span>
   </div>
);
WeatherExtraInfo.prototype = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};
export default WeatherExtraInfo;
