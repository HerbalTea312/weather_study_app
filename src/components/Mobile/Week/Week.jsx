import Day from '../Day/Day';
import React from 'react';
// import classes from './Week.module.css';

const Week = function ({data, ...props}) {
    return (
        <div>
            <h2>Неделя</h2>
            {data.map(day =>
               <Day day={day}/> )}
        </div>
    );
}

export default Week;