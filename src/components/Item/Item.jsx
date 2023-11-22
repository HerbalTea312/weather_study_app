import React from 'react';
import WeatherSVG from '../UI/Icons/WeatherSVG';
import classes from './Item.module.css';

const Item = function ({details, time}) {
    return (
        <div className={classes.mobileItem}>
            <p>{time}</p>
            <WeatherSVG value={details.icon} />
            <p>{details.temperature}</p>
            <p>{details.wet}</p>
            <p>{details.wind}</p>
        </div>
    );
}

export default Item;