// import { configureStore } from "@reduxjs/toolkit";

// import reducer from "./reducer";

// export default function config() {
//     return configureStore({ reducer })
// }


import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;