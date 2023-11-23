import CitySelect from '../CitySelect/CitySelect';
import Details from '../DayDetails/Details';
import WeatherService from '../API/WeatherServiceAPI';
import React, { useEffect, useState } from 'react';
import '../../styles/App.css'

function DayPage() {

    const [dayWeather, setDayWeather] = useState([]);

    useEffect(() => { fetchHandler() }, [])

    async function fetchHandler() {
        const response = await WeatherService.getDayDetails();
        setDayWeather(response)
    }

    function onCitySelect(selectedCity) {
        localStorage.setItem("city", selectedCity);
    }

    return (
        <div className='App'>
            <header>
                <h1>SIMPLE WEATHER</h1>
                <hr style={{ margin: '10px 0' }} />
            </header>
            <CitySelect onCitySelect={onCitySelect} />
            <hr style={{ margin: '10px 0' }} />
            <Details details={dayWeather} />
        </div >
    );
}

export default DayPage;