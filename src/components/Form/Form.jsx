import React from 'react';
import { useState } from 'react';
// import classes from './Input.module.css';

const Form = React.forwardRef(() => {

    const [modal, setModal] = useState(false);
    const [post, setPost] = useState({ title: '', body: '' });

    return (
        <ModalWindow visible={modal} setVisible={setModal}>
            <form>
                <Input onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Название города />
            </form>
        </ModalWindow>
    );
});

export default Form;