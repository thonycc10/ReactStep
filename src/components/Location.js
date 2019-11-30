import React from 'react';

const Location = (prosp) => {
    // breve codigo llamado destructuring -> const { city } = prosp; o const { city, city 2 } = prosp;
    const { city } = prosp;

    return (
    <div><h1>{city}</h1></div>
    )};

export default Location;
