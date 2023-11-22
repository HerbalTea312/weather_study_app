import CitySelect from '../CitySelect/CitySelect';
import Details from '../DayDetails/Details';
// import WeatherService from './components/API/WeatherServiceAPI';
import React from 'react';
import '../../styles/App.css'

function onCitySelect(selectedCity) {
    console.log(selectedCity)
    localStorage.setItem("city", selectedCity);
}

function DayPage() {
    return (
        <div className='App'>
            <header>
                <h1>SIMPLE WEATHER</h1>
                <hr style={{ margin: '10px 0' }} />
            </header>
            <CitySelect onCitySelect={onCitySelect} />
            <hr style={{ margin: '10px 0' }} />
            <Details details={detailsMobile} />
        </div >
    );
}

export default DayPage;

const detailsMobile =
{
    'id': '1',
    'date': '2023-11-13',
    'times': [
        {
            'time': 'morning',
            'icon': 'Cloud',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        {
            'time': 'day',
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        {
            'time': 'evening',
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        {
            'time': 'night',
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        }]
}
