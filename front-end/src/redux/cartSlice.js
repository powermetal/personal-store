import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectProductsIndex } from './productsSlice';

const initialState = {
        items: {},
        order: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload
            return {
                ...state,
                items: {...state.items, [id]: state.items[id] ? state.items[id] + 1 : 1 },
                order: state.order.find( e => e === id) ? state.order : [...state.order, id]
            }
        }
    },
});

const selectOrder = state => state.cart.order
const selectItems = state => state.cart.items

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