import React from 'react';
import classes from './Item.module.css';

const Item = function (props) {
    return (
        <div className={classes.mobileItem} >
            <p>{props.details.time}</p>
            <p>{props.details.icon}</p>
            <p>{props.details.temperature}</p>
            <p>{props.details.wet}</p>
            <p>{props.details.wind}</p>
        </div>
    );
}

export default Item;