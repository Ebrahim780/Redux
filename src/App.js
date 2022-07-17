import React from 'react'
import Main from './components/Main'
import './styles/bootstrap.min.css'
import './styles/style.css'

import { Provider } from 'react-redux'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)


export default App