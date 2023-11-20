import React from 'react';
import classes from './ChangeButton.module.css';

const ChangeButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default ChangeButton;