import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import React, { useEffect, useState } from 'react';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setcountries] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountries(data))
  }, []);

  const handleClick = (country)=>{
    const newCountries = [...selectedCountries, country];
    setSelectedCountries(newCountries);
  };

  return (
    <div className="main_content">
      <div className="countryCart">
        <Cart selectedCountries={selectedCountries}></Cart>
      </div>
      
      <div className="container">
        {
          countries.map(country => <Country country={country} handleClick={handleClick}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
