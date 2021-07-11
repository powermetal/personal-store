import { createSlice } from '@reduxjs/toolkit';

const pepe = ( items, {id, title, price, img}) => {
    if(items[id]){
        return { [id]: {...items[id], price: items[id].price, quantity: items[id].quantity + 1} }
    }
    else {
        return {
            [id]: {
                title,
                price,
                img,
                quantity: 1
            }
        }
    }
}

const initialState = {
    cart: {
        items: {1:4, 3:2},
        order: [3, 1]
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return state
        }
    },
});

export const selectCart = state => state.cart.cart.order.map( id => {
    const products = state.products.products
    return {
        title: products[id].title,
        image: products[id].image,
        price: products[id].price,
        quantity: state.cart.cart.items[id]
    }
})

export const selectTotal = state => Object
    .entries(state.cart.cart.items)
        .reduce( (acc, [id, quantity] ) => {
            return acc + state.products.products[id].price * quantity
}, 0)

export const {
    addToCart
} = cartSlice.actions

export default cartSlice.reducer