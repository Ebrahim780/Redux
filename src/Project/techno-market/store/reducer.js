import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'products',
    initialState: {
        carts: [],
        cartTotal: 0
    },

    reducers: {
        addCart: (products, action) => {
            products.carts.push({
                id: action.payload.id,
                price: action.payload.price
            })
        },

        removeCart: (products, action) => {
            let copy = { ...products };
            let otherItems = copy.carts.filter(cartItem => cartItem.id !== action.payload.id)
            let removeOne = copy.carts.filter(i => i.id === action.payload.id)
            removeOne.pop();
            return { ...products, carts: [...otherItems, ...removeOne] }
        },

        total: (products, action) => {                      // مشکل داره
            var totalVal = 0;
            for (let i = 0; i < action.payload.length; i++) {
                totalVal += action.payload[i].price;
            }
            return {...products, cartTotal: totalVal}
        }
    }
})

export const { addCart, removeCart, total } = slice.actions;
export default slice.reducer;












// createAction
// export const addCart = payload => ({
//     type: 'ADD_CART',
//     payload
// })

// export const removeCart = payload => ({
//     type: 'REMOVE_CART',
//     payload
// })


// // reducer
// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_CART':
//             return [
//                 ...state, {
//                     id: action.payload.id,
//                     price: action.payload.price
//                 }
//             ]

//         case 'REMOVE_CART':
//             let copy = [...state];
//             let otherItems = copy.filter(cartItem => cartItem.id !== action.payload.id)
//             let removeOne = copy.filter(i => i.id === action.payload.id)
//             removeOne.pop();
//             return [...otherItems, ...removeOne]

//         default:
//             return state
//     }
// }

// export default reducer;