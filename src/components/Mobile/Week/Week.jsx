import Day from '../Day/Day';
import React from 'react';
// import classes from './Week.module.css';

const Week = function ({data}) {
    return (
        <div>
            <h2>Неделя</h2>
            {data.map(day =>
               <Day day={day} key={day.id}/> )}
        </div>
    );
}

export default Week;