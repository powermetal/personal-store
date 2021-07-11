import React from 'react'
import { useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Product.scss';
import { addToCart } from '../../redux/cartSlice';

const Product = ({title, price, img, id}) => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(addToCart({id}))
    }

    return (
        <div className="product">
            <img src={img} alt={title}/>
            <div className="product-info">
                <span className="product-title">{title}</span>
                <span className="product-price">${price}</span>
                <div onClick={ () => onClick()}>
                    <AddShoppingCartIcon />
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
    )
}

export default Product