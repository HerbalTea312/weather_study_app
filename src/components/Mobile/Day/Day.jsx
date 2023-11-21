import React from 'react';
import Item from '../Item/Item';
import classes from './Day.module.css';

function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
}

function getMonthName(date) {
    let months = ['Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Сентябрь', 'Октябрь', 'Ноябрь'];
    return months[date.getMonth()];
}

const Day = function (props) {
    let date = new Date(props.day.date);
    return (
        <div>
            <div className={classes.dayMobile}>
                <p><span className={classes.weekDay}>{getWeekDay(date)}</span>, {date.getDate()}  {getMonthName(date)}</p>
                <button>Подробнее</button>
            </div>
            <div>
                <Item details={props.day.day} time='День' />
                <Item details={props.day.night} time='Ночь' />
            </div>
        </div>
    );
}

export default Day;