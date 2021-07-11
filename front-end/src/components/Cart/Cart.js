import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectTotal } from '../../redux/cartSlice';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Cart.scss';

const Cart = () => {

    const items = useSelector(selectCart)
    const totalPrice = useSelector(selectTotal)
    const [clicked, setClicked] = useState(false)

    const renderItems = () => {
        if(items.length){
            return items.map ( e => {
                return (
                    <li>
                        <div className="cart-item">
                        <img src={e.image} alt={e.title} />
                        <div>
                            <p>{e.title}</p>
                            <span>${e.price}</span>
                        </div>
                        </div>
                        <p>x{e.quantity}</p>
                    </li>
                )
            })
        }            
        else 
        return <li>Your cart is empty.</li>
    }

    const renderCart = () => {
        if(clicked) {
            return (
                <ul className="cart-list">
                    {renderItems()}
                    <p className="cart-price">Subtotal: <span>${totalPrice}</span></p>
                    <button>Checkout</button>
                </ul>
            )
        }
    }

    return (
            <div className="cart" onClick={ () => setClicked(!clicked)}>
                <div className="cart-button">
                    <ShoppingCartIcon />
                    <span>Your Cart</span>
                </div>
                {renderCart()}
            </div>
    )
}

export default Cart
