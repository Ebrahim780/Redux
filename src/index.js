import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Reducer } from './Practice/reducers';
import './Practice/game/components/style.css';
import Navbar from './Practice/game/components/navbar';
import List from './Practice/game/components/list';
import Form from './Practice/game/components/form';


const store = createStore(Reducer)

ReactDOM.render(
  <>
    <Navbar />
    <List />
    <Form />
  </>,
  document.getElementById('root')
);

render()

store.Subscribe(render)
reportWebVitals();