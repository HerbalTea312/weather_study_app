import React from 'react';
import '../styles/App.css'

function getWeekDay(date) {
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return days[date.getDay()];
}

const WeatherItem = function (props) {
let date = new Date(props.post.date);
    return (
        <div className='flex direction_column'>
            <p>{getWeekDay(date)}</p>
            <p>{props.post.date}</p>
            <img src="" alt={props.post.icon}></img>
            <p>{props.post.temperature}</p>
        </div>
    );
}

export default WeatherItem;
