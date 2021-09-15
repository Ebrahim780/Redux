import React from 'react';
import List from './Practice/library/components/list';
import Form from './Practice/library/components/form';
import store from './Practice/library/store'

const App = () => {
    return (
        <div className="App">
            <Form />
            <List />
        </div>
    );
}

store.subscribe( () => {
    console.log(store.getState())
})

export default App;