import { v4 as uuid } from 'uuid'
export const Reducer = (state = {book: []}, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return (
                [...state, {
                    title: action.book.title,
                    author: action.book.author,
                    summary: action.book.summary,
                    id: uuid()
                }]
            )

        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)

        default:
            return state
    }
}