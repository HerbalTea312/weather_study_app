import React from 'react';
import '../styles/App.css'

const OneItemRow = function (props) {
    return (
        <div className='flex direction_column'>
            <p>{props.day.value}</p>
        </div>
    );
}

export default OneItemRow;