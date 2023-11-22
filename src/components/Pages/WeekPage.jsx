import CitySelect from '../CitySelect/CitySelect';
import Week from '../Week/Week';
// import WeatherService from './components/API/WeatherServiceAPI';
import React from 'react';
import '../../styles/App.css'

function onCitySelect(selectedCity) {
    console.log(selectedCity)
    localStorage.setItem("city", selectedCity);
}

function WeekPage() {
    return (
        <div className='App'>
            <header>
                <h1>SIMPLE WEATHER</h1>
                <hr style={{ margin: '10px 0' }} />
            </header>
            <CitySelect onCitySelect={onCitySelect} />
            <hr style={{ margin: '10px 0' }} />
            <Week data={dataMobile} />
        </div >
    );
}

export default WeekPage;

const dataMobile =
    [{
        'id': '1',
        'date': '2023-11-13',
        'day': {
            'icon': 'Cloud',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        'night': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        }
    },
    {
        'id': '2',
        'date': '2023-11-14',
        'day': {
            'icon': 'Cloud',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        'night': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        }
    },
    {
        'id': '3',
        'date': '2023-11-15',
        'day': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        'night': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        }
    },
    {
        'id': '4',
        'date': '2023-11-16',
        'day': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        'night': {
            'icon': 'Cloud',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        }
    },
    {
        'id': '5',
        'date': '2023-11-17',
        'day': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        'night': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        }
    },
    {
        'id': '6',
        'date': '2023-11-18',
        'day': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        'night': {
            'icon': 'Cloud',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        }
    },
    {
        'id': '7',
        'date': '2023-11-19',
        'day': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        },
        'night': {
            'icon': 'Snow',
            'temperature': '+1',
            'wind': '0-1 ЮЗ',
            'presure': '744',
            'wet': '70 %'
        }
    }]