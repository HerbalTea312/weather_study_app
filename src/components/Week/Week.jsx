import Day from '../Day/Day';
import React from 'react';

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