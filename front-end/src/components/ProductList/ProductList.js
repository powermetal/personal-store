import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../redux/productsSlice'
import Product from '../Product/Product'
import './ProductList.scss'

const ProductList = () => {

    const products = useSelector(selectProducts)

    const renderProducts = () => {
        return products.map( p => {
          return <Product title={p.title} img={p.image} price={p.price} id={p.id} />
        })
      }

    return (
        <div className="products">
              {renderProducts()}
        </div>
    )
}

export default ProductList
