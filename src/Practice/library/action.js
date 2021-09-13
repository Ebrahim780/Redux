import * as actions from './actionTypes';

export const addBook = title => {
    return {
        type: actions.ADD_BOOK,
        payload: {
            title
        }
    }
}

export const removeBook = id => {
    return {
        type: actions.REMOVE_BOOK,
        payload: {
            id
        }
    }
}

export const publishBook = id => {
    return {
        type: actions.PUBLISH_BOOK,
        payload: {
            id
        }
    }
}