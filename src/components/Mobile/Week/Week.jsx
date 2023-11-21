import Day from '../Day/Day';
import React from 'react';
// import classes from './Week.module.css';

const Week = function (props) {
    return (
        <div>
            <h3>Неделя</h3>
            {props.data.map(day =>
               <Day day={day}/> )}
        </div>
    );
}

export default Week;