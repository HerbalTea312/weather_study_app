import React from 'react';
import Item from '../Item/Item';
import classes from './Day.module.css';
import StyledButton from '../UI/StyledButton/StyledButton'

function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
}

function getMonthName(date) {
    let months = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Сентября', 'Октября', 'Ноября'];
    return months[date.getMonth()];
}

const Day = function ({day}) {
    let date = new Date(day.date);
    return (
        <div className={classes.dayBorder}>
            <div className={classes.dayMobile}>
                <p><span className={classes.weekDayText}>{getWeekDay(date)}</span>, {date.getDate()}  {getMonthName(date)}</p>
                <StyledButton>Подробнее</StyledButton>
            </div>
            <div>
                <Item details={day.day} time='День' />
                <Item details={day.night} time='Ночь' />
            </div>
        </div>
    );
}

export default Day;