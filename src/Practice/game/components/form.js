import React, { useState } from 'react';

const Form = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [summary, setSummary] = useState('')

    const submitHandle = (event) => {
        event.preventDefault()
        dispatch({
            type: 'ADD_BOOK', books:{
                title, author, summary
            }
        })
        setTitle('')
        setAuthor('')
        setSummary('')
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" className="detail" required placeholder="عنوان" value={title}
                onChange={(event) => setTitle(event.target.value)} />
            <input type="text" className="detail" required placeholder="نویسنده" value={author}
                onChange={(event) => setAuthor(event.target.value)} />
            <textarea type="text" className="detail" required placeholder="توضیحات" value={summary}
                onChange={(event) => setSummary(event.target.value)}></textarea>
            <button type="submit" className="send">افزودن</button>
        </form>
    );
}

export default Form;