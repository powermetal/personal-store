import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: {
        1: {
          id: 1,
          title: 'matezuli de algarrobo',
          image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/479/255/products/pic_20200901_121958-79e21674af2bbe6fe415989736352509-240-0.jpg',
          price: 380
        },    
        2: {
          id: 2,
          title: 'Firulais de metal',
          image: 'https://www.artmajeur.com/medias/hd/m/a/mari9art/artwork/9870301_rocket-dog-metal-art-1-mari9art.jpg',
          price: 1054
        },
        3: {
          id: 3,
          title: 'Gatito Sagrado',
          image: 'https://i.pinimg.com/originals/23/17/08/2317086832c82820a096f60b01485251.jpg',
          price: 99999
        }
    }
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    
    }
});

export const selectProductsIndex = state => state.products.products
export const selectProducts = state => Object.values(state.products.products)

export default productsSlice.reducer