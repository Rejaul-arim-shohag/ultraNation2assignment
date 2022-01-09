// import React, { useEffect, useState } from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    const { flags, name, population, region, capital } = props.country;
    return (
        <div className="country">
            
            <img className="countryImg" src={flags.png} alt="" />
            <div className="content">
                <h2>{name.common}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
                <button onClick={()=>{props.handleClick(props.country)}} style={{marginTop:"10px"}} class="button" role="button">Add Country</button>
            </div>
        </div>
    );
};

export default Country;