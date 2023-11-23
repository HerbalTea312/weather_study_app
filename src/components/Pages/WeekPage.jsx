import CitySelect from '../CitySelect/CitySelect';
import Week from '../Week/Week';
import WeatherService from '../API/WeatherServiceAPI';
import React, { useEffect, useState } from 'react';
import '../../styles/App.css'

function WeekPage() {
    const [weekWeather, setWeekWeather] = useState([]);

    useEffect(() => { fetchHandler() }, [])

    async function fetchHandler() {
        const response = await WeatherService.getWeekData();
        setWeekWeather(response)
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
            <Week data={weekWeather} />
        </div >
    );
}

export default WeekPage;
