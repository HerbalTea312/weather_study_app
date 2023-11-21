import Item from '../Item/Item';
import React from 'react';

const Details = function ({details}) {
    return (
        <div>
            {details.times.map(time =>
                <Item details={time} time={time.time} key={time.time}/>
            )}
        </div>
    );
}

export default Details;