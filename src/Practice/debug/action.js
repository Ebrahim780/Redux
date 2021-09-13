import * as actions from './actionTypes'

export const addBug = name => {
    return {
        type: actions.ADD_BUG,
        payload: {
            name
        }
    }
}

export const removeBug = id => {
    return {
        type: actions.REMOVE_BUG,
        payload: {
            id
        }
    }
}

export const resolveBug = id => {
    return {
        type: actions.RESOLVE_BUG,
        payload: {
            id
        }
    }
}