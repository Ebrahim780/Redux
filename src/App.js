// import React from 'react';
// import List from './Practice/library/components/list';
// import Form from './Practice/library/components/form';
// import store from './Practice/library/store/store'

// const App = () => {
//     return (
//         <div className="App">
//             <Form />
//             <List />
//         </div>
//     );
// }

// store.subscribe( () => {
//     console.log( store.getState())
// })

// export default App;





// Project
import React from 'react';
import Header from './Project/techno-market/components/header';
import Items from './Project/techno-market/components/items';
import './Project/techno-market/styles/bootstrap.rtl.min.css'
import './Project/techno-market/styles/style.css'

const App = () => {
    return (
        <div className="container-fluid bg-light">
            <main>
                <Header/>
                <Items/>
            </main>
        </div>
    )
}

export default App;