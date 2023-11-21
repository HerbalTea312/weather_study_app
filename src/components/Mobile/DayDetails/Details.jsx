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

const Details = function ({ details }) {
    return (
        <div>
            {details.times.map(time =>
                <Item details={time} time={getDayPart(time.time)} key={time.time} />
            )}
        </div>
    );
}

export default Details;