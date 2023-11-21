import React, { useState } from 'react';
import ModalWindow from './UI/ModalWindow/ModalWindow';
import ChangeButton from './UI/ChangeButton/ChangeButton';
import Input from './UI/Input/Input';
import '../styles/App.css'

const City = function () {

    const [modal, setModal] = useState(false);
    const [city, setCity] = useState();

    return (
        <div className='flex space_between'>
            <h3>Ульяновск</h3>
            <ChangeButton onClick={() => setModal(true)}>
                Изменить город
            </ChangeButton>
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