import React from 'react';
import Item from '../Item/Item';
import classes from './Day.module.css';

const Day = function () {
    return (
        <div className={classes.dayMobile}>
        <div className='flex direction_row space_between'>
          <p>Понедельник, 13 ноября</p>
          <button>Подробнее</button>
        </div>
        <div>
          <Item />
          <Item />
        </div>
      </div>
    );
}

export default Day;