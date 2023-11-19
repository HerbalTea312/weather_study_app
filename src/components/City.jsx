import React from 'react';
import '../styles/App.css'

const City = function () {
    return (
        <div className='flex space_between'>
            <p>Ульяновск</p>
            <button>Изменить город</button>
        </div>
    );
}

export default City;