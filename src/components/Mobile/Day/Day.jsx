import React from 'react';
import Item from '../Item/Item';
import classes from './Day.module.css';

const Day = function (props) {
    return (
        <div>
            <div className={classes.dayMobile}>
                <p>Понедельник, {props.day.date}</p>
                <button>Подробнее</button>
            </div>
            <div>
                <Item details={props.day.day} />
                <Item details={props.day.night} />
            </div>
        </div>
    );
}

export default Day;