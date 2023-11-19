import React from 'react';
import WeatherItem from './WeatherItem';
import '../styles/App.css'

const Table = function () {
    return (
        <div>
            <h2>Неделя</h2>
            <div class="flex direction_row bg_table">
                <WeatherItem post={{
                    "date": "2023-11-13",
                    "icon":"Snowy",
                    "temperature":"+1"
                }} />
                <WeatherItem post={{
                    "date": "2023-11-14",
                    "icon":"Snowy",
                    "temperature":"0"
                }} />
                <WeatherItem post={{
                    "date": "2023-11-15",
                    "icon":"Snowy",
                    "temperature":"0"
                }} />
                <WeatherItem post={{
                    "date": "2023-11-16",
                    "icon":"Snowy",
                    "temperature":"+1"
                }} />
                <WeatherItem post={{
                    "date": "2023-11-17",
                    "icon":"Snowy",
                    "temperature":"-1"
                }} />
                <WeatherItem post={{
                    "date": "2023-11-18",
                    "icon":"Snowy",
                    "temperature":"-2"
                }} />
                <WeatherItem post={{
                    "date": "2023-11-19",
                    "icon":"Snowy",
                    "temperature":"-2"
                }} />
            </div>
        </div>
    );
}

export default Table;
