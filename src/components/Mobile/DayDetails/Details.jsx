import Item from '../Item/Item';
import React from 'react';

const wordMapping = {
    morning: 'утро',
    day: 'день',
    evening: 'вечер',
    night: 'ночь'
  };
  
  function getDayPart(word) {
    return wordMapping[word];
  }

const Details = function ({details}) {
    return (
        <div>
            {details.times.map(time =>
                <Item details={time} time={getDayPart(time.time)} key={time.time}/>
            )}
        </div>
    );
}

export default Details;