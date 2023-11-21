import React, {useState} from 'react';
import classes from './CitySelect.module.css'

const CitySelect = (props) => {
    const [selectedCity, setSelectedCity] = useState('');
    const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск'];
    
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        props.onCitySelect(event.target.value); // вызов функции обратного вызова
    };
    
    return (
        <select className={classes.Select} value={selectedCity} onChange={handleCityChange}>
            {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
            ))}
        </select>
    );
    };
    
    export default CitySelect;