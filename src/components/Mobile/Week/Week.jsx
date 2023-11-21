import Day from '../Day/Day';
import React from 'react';
// import classes from './Week.module.css';

function tmp (value) {
    return (<Day day={value}/>)
}

const Week = function (props) {
    return (
        <div>
            <h3>Неделя</h3>
            {props.data.map(day =>
               tmp(day) )}
        </div>
    );
}

export default Week;