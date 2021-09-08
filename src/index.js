import React from 'react';
import { createStore } from 'redux';
import Counter from './Practice/components/counter'
import counter from './Practice/reducers/reducers'
import reactDom from 'react-dom';
import './index.css'

const store = createStore(counter)

const render = () => reactDom.render(
  <Counter
    value = {store.getState()}
    increment={() => store.dispatch({ type: 'INCREMENT' })}
    decrement={() => store.dispatch({ type: 'DECREMENT' })}
  />, document.getElementById('root')
)

render()

store.subscribe(render)