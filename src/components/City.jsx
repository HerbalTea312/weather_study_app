import React, { useState } from 'react';
import ModalWindow from './UI/ModalWindow/ModalWindow';
import StyledButton from './UI/StyledButton/StyledButton';
import Input from './UI/Input/Input';
import '../styles/App.css'

const City = function ({cityName, ...props}) {

    const [modal, setModal] = useState(false);
    const [city, setCity] = useState();

    return (
        <div className='flex space_between'>
            <h>{cityName}</h>
            <StyledButton onClick={() => setModal(true)}>
                Изменить город
            </StyledButton>
            <ModalWindow
                visible={modal} setVisible={setModal}>
                <form>
                    <Input
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        type='text'
                        placeholder='Название города'
                    ></Input>
                    <p>{city}</p>
                </form>
            </ModalWindow>
        </div>
    );
}

export default City;