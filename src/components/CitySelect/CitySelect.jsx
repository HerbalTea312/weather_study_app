import React, { useState, useEffect } from 'react';
import classes from './CitySelect.module.css'
import WeatherService from '../API/WeatherServiceAPI';

const CitySelect = (props) => {
    const [selectedCity, setSelectedCity] = useState('');
    const [allCities, setAllCities] = useState([]);

    useEffect(() => { fetchHandler() }, [])

    async function fetchHandler() {
        const response = await WeatherService.getCityItems();
        setAllCities(response)
    }

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        props.onCitySelect(event.target.value);
    };
    
    return (
        <select className={classes.Select} value={localStorage.getItem("city") ? localStorage.getItem("city") : selectedCity} onChange={handleCityChange}>
            {allCities.map((city) => (
                <option key={city} value={city}>{city}</option>
            ))}
        </select>
    );
};

export default CitySelect;