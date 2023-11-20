import React from 'react';
import WeatherSVG from './UI/Icons/WeatherSVG';
import '../styles/App.css'

function getWeekDay(date) {
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return days[date.getDay()];
}


const ThreeItemsRow = function (props) {

    let date = new Date(props.post.date);
    return (
        <div className='flex direction_column'>
            <p>{getWeekDay(date)}</p>
            <p>{props.post.date}</p>
            <WeatherSVG value={props.post.icon} />
            <p>{props.post.temperature}</p>
        </div>
    );
}

export default ThreeItemsRow;
