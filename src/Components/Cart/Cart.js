import React from 'react';

const Cart = (props) => {
    const selectedCountries = props.selectedCountries;
    console.log(selectedCountries)
    
    const totalPopulation = props.selectedCountries.reduce((total, country)=>total+country.population, 0)
    return (
        <div>
            {
            selectedCountries.map(country=><li>{country.name.common}: {country.population}</li>)
            }
            <h1>Selected Countries: {props.selectedCountries.length}</h1>
            <h2>Total Popilation: {totalPopulation}</h2>
        </div>
    );
};

export default Cart;