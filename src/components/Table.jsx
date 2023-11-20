import React, { useState } from 'react';
import WeatherItem from './WeatherItem';
import '../styles/App.css'

const Table = function () {

    const [days, setDay] = useState([
        {
            "id":"1",
            "date": "2023-11-13",
            "icon": "Snow.svg",
            "temperature": "+1"
        },
        {
            "id":"2",
            "date": "2023-11-14",
            "icon": "Snow.svg",
            "temperature": "0"
        },
        {
            "id":"3",
            "date": "2023-11-15",
            "icon": "Snow.svg",
            "temperature": "0"
        },
        {
            "id":"4",
            "date": "2023-11-16",
            "icon": "Snow.svg",
            "temperature": "+1"
        },
        {
            "id":"5",
            "date": "2023-11-17",
            "icon": "Snow.svg",
            "temperature": "-1"
        },
        {
            "id":"6",
            "date": "2023-11-18",
            "icon": "Snow.svg",
            "temperature": "-2"
        },
        {
            "id":"7",
            "date": "2023-11-19",
            "icon": "Snow.svg",
            "temperature": "-2"
        }
    ])
    console.log(days)
    console.log(setDay);
    return (
        <div>
            <h2>Неделя</h2>
            <div className="flex direction_row bg_table">
                {days.map(day =>
                    <WeatherItem post = {day} key={day.id}/>
                )}
            </div>
        </div>
    );
}

export default Table;
