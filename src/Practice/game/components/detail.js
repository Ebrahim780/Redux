import React from 'react';
import remove from './../delete.svg'
const Detail = () => {

    return (
        <li>
            <img src={remove} alt="delete" className="delete" width="20" 
            onClick={ () => dispatch({type: 'REMOVE_BOOK', id: book.id}) }/>
            <div className="title">
                عنوان:
                { ` ${book.title}`}
            </div>
            <div className="subtitle">
                نویسنده:
                { ` ${book.author}`}
            </div>
            <div className="subtitle">
                خلاصه:
                { ` ${book.summary}`}
            </div>
        </li>
    );
}
 
export default Detail;