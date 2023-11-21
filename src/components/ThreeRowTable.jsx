import React from 'react';
import ThreeRowItem from './ThreeRowItem';
import '../styles/App.css'

const Table = function (props) {
    return (
        <div>
            <h2>Неделя</h2>
            <div className="flex direction_row bg_table">
                {props.data.map(day =>
                    <ThreeRowItem post = {day} key={day.date}/>
                )}
            </div>
        </div>
    );
}

export default Table;
