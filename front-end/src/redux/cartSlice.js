import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectProductsIndex } from './productsSlice';

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

const selectOrder = state => state.cart.cart.order
const selectItems = state => state.cart.cart.items

export const selectCart = createSelector(
    [selectOrder, selectItems, selectProductsIndex],
    (order, items, products) =>
       order.map( id => {
            return {
                title: products[id].title,
                image: products[id].image,
                price: products[id].price,
                quantity: items[id]
            }
        })
    )

export const selectTotal = state => 
    Object.entries(selectItems(state))
          .reduce( (acc, [id, quantity]) => {
            return acc + selectProductsIndex(state)[id].price * quantity
    }, 0)

export const {
    addToCart
} = cartSlice.actions

export default cartSlice.reducer