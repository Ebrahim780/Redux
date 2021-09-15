import React, { useState } from 'react';
import { addBook, publishBook } from '../action';
import store from '../store';
import { currentId } from '../reducer';


const Form = () => {
    const [title, setTitle] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        setTitle('')
        store.dispatch(addBook(title))
    }

    const publish = () => {
        store.dispatch(publishBook(currentId))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input placholder="عنوان" value={title} required onChange={(event) => setTitle(event.target.value)} />
                    <button type="submit">افزودن</button>
                </div>
            </form>
            <button onClick={publish}>انتشار</button>
        </div>
    )
}

export default Form;