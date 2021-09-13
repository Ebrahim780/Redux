import * as actions from './actionTypes';

let currentId = 0;

const Reducer = (state =[], action) => {
    switch(action.type) {
        case actions.ADD_BUG:
            return [
                ...state, {
                    id: ++currentId,
                    name: action.payload.name,
                    resolve: false
                }
            ]

        case actions.REMOVE_BUG:
            return state.filter(bug => bug.id !== action.payload.id)
        
        case actions.RESOLVE_BUG:
            return state.map( bug => bug.id !== action.payload.id ? bug : {...bug, resolve: true})
        default:
            return state
    }
}

export default Reducer;