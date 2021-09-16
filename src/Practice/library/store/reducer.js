import * as actions from './actionTypes';

export let currentId = 0;

const Reducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_BOOK:
            return [
                ...state, {
                    id: ++currentId,
                    title: action.payload.title,
                    publish: false
                }
            ]

        case actions.REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload.id)
            
        case actions.PUBLISH_BOOK:
            return state.map( book => book.id !== action.payload.id ? book : {...book, publish: true})
            
        case actions.UNPUBLISH_BOOK:
            return state.map( book => book.id !== action.payload.id ? book : {...book, publish: false})

        default:
            return state
    }
}

export default Reducer;