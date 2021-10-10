// createAction
export const addCart = payload => ({
    type: 'ADD_CART',
    payload
})

export const removeCart = payload => ({
    type: 'REMOVE_CART',
    payload
})

export const total = payload => ({
    type: 'TOTAL_CART',
    payload
})


// reducer
const reducer = (state = { cart: [], cartTotal: 0 }, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                cart: [
                    ...state.cart,
                    {
                        id: action.payload.id,
                        price: action.payload.price
                    }
                ]
            }

        case 'REMOVE_CART':
            let copy = { ...state };
            let otherItems = copy.cart.filter(cartItem => cartItem.id !== action.payload.id)
            let removeOne = copy.cart.filter(i => i.id === action.payload.id)
            removeOne.pop();
            return { ...state, cart: [...otherItems, ...removeOne] }

        case 'TOTAL_CART':
            let totalVal = 0;
            for (let i = 0; i < action.payload.length; i++) {
                totalVal += action.payload[i].price;
            }
            return {...state, cartTotal: totalVal }

        default:
            return state
    }
}

export default reducer;