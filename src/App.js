import './index.css';
import React from 'react';
import Main from './components/main';
import './styles/bootstrap.min.css'
import './styles/style.css'

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}

export default App;