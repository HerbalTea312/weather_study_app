import Day from '../Day/Day';
import React from 'react';

const Week = function (props) {
    return (
        <div>
            <h2>Неделя</h2>
            {Object.values(props.data).map(day =>
                <Day day={day} key={day.id} />)}
        </div>
    );
}

export default Week;