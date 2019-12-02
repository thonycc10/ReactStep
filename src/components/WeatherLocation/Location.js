import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Location = ({ city }) => {
    // breve codigo llamado destructuring -> const { city } = prosp; o const { city, city 2 } = prosp;
    return (
    <div className="locationCont"><h1>{city}</h1></div>
    )};

Location.prototype = { // añadir ptsr y pretar tab ara completar
    city: PropTypes.string.isRequired,
};

export default Location;
