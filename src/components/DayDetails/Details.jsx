import Item from '../Item/Item';
import React, { useState } from 'react';
import axios from 'axios';

async function fetchHandler() {
    const response = await axios.get("https://my-json-server.typicode.com/HerbalTea312/weather/db/data/detailsMobile");
    console.log(response.data);
    return response.data;
  }  

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
            <button onClick={fetchHandler}>fetch</button>
            <h3>{getWeekDay(date)}</h3>
            <p>{date.getDate()} {getMonthName(date)}</p>
            {details.times.map(time =>
                <Item details={time} time={getDayPart(time.time)} key={time.time} />
            )}
        </div>
    );
}

export default Details;