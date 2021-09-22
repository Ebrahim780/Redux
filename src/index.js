// library
// import { addBook, publishBook } from "./Practice/library/action";
// import store from "./Practice/library/store";


// store.dispatch(addBook('Power Of Plan'));
// store.dispatch(publishBook(1))

// console.log(store.getState())



// debug
// import { addBug, resolveBug } from "./Practice/debug/action";
// import store from "./Practice/debug/store";

// store.dispatch(addBug('first bug'))
// store.dispatch(resolveBug(1))

// console.log(store.getState())



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>,
    document.getElementById('root')
);

reportWebVitals();