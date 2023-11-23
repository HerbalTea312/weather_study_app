import React from 'react';
import classes from './Image.module.css';


const Image = function ({ weather }) {
const path = "./img/" + weather;
    return (
        <div className={classes.imgDiv}>
            <img src={path} alt={weather} className={classes.png}/>
        </div>
    );
}

export default Image;