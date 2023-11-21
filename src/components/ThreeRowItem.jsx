import React from 'react';
import WeatherSVG from './UI/Icons/WeatherSVG';
import '../styles/App.css'

function getWeekDay(date) {
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return days[date.getDay()];
}

function isNotNull(value) {
    if (value) return (value)
}

const ThreeRowItem = function (props) {
    console.log(props);
    let weekDay = new Date(props.post.date);
    return (
        <div className='flex direction_column'>

            {/* Придумать, как показывать дату ИЛИ время
            И можно будет использовать один компонент на все списки */}
            
            <p>{getWeekDay(weekDay)}</p>
            <WeatherSVG value={isNotNull(props.post.icon)} />
            <p>{isNotNull(props.post.temperature)}</p>
        </div>
    );
}

export default ThreeRowItem;
