import React from 'react';
import WeatherSVG from '../../UI/Icons/WeatherSVG';
import classes from './Item.module.css';

const Item = function (props) {
    return (
        <div className={classes.mobileItem} >
            <p>{props.time}</p>
            <WeatherSVG value={props.details.icon} />
            <p>{props.details.temperature}</p>
            <p>{props.details.wet}</p>
            <p>{props.details.wind}</p>
        </div>
    );
}

export default Item;