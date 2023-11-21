import React from 'react';
import classes from './Item.module.css';

const Item = function () {
    return (
        <div className={classes.mobileItem} >
            <p>день</p>
            <p>icon</p>
            <p>Градусы</p>
            <p>Влажность</p>
            <p>Ветер</p>
        </div>
    );
}

export default Item;