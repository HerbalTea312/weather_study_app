import Item from '../Item/Item';
import React from 'react';

function getDayPart(word) {
    const dayParts = {
        morning: 'утро',
        day: 'день',
        evening: 'вечер',
        night: 'ночь'
    };
    return dayParts[word];
}

function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
}

function getMonthName(date) {
    let months = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Сентября', 'Октября', 'Ноября'];
    return months[date.getMonth()];
}

const Details = function ({ details }) {
    let date = new Date(details.date);
    return (
        <div>
            <h3>{getWeekDay(date)}</h3>
            <p>{date.getDate()} {getMonthName(date)}</p>
            {details.times.map(time =>
                <Item details={time} time={getDayPart(time.time)} key={time.time} />
            )}
        </div>
    );
}

export default Details;