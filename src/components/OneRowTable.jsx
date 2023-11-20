import React from 'react';
import OneItemRow from './OneItemRow';
import '../styles/App.css'

const OneRowTable = function (props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div className="flex direction_row bg_table">
                {props.data.map(day =>
                    <OneItemRow day={day} key={day.date} />
                )}
            </div>
        </div>
    );
}

export default OneRowTable;