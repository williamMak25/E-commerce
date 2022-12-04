import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './cart.css'
import { removeItems } from "./slice";

const Cart = ( ) => {
      const cart = useSelector( (state) => state.addItems )
      const dispatch = useDispatch()
      const handaleRemooveItems = (cartitem)=> {
        dispatch(removeItems(cartitem))
      }
    return(
        <>
        <div className="cart__container">
        <h1>Shopping Cart</h1>
        {cart.items.length === 0  ?                                                                                            
               (<div className="cart-empty">
                    <h2>Your Cart is empty</h2>
                    <div className="start-shopping">
                        <NavLink to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                        </svg>
                            <span> Start Shopping</span>
                        </NavLink>
                    </div>
                </div>)
            : (<>
                    <div className="titles">
                        <h3 className="products-name">Products</h3>
                        <h3 className="price-name">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">total</h3>
                    </div>

                    <div className="cart-items">
                        {cart.items?.map( (cartitem) => {
                          return <div className="cart-item" key={cartitem.id}>

                                <div className="cart-product">
                                    <img src={cartitem.image} alt={cartitem.title}/>
                                    <div className="cart-title">
                                        <h2>{cartitem.title}</h2>
                                        <button onClick={()=> handaleRemooveItems(cartitem)}>Remove</button>
                                    </div>
                                </div>

                                 <div className="cart-productPrice">{cartitem.price}</div>

                                <div className="cart-productQuantity">
                                    <button>-</button>
                                    <div className="count">{cartitem.itemQuantity}</div>
                                    <button>+</button>
                                </div>

                                <div className="totoal-price">
                                    {cartitem.price * cartitem.itemQuantity}
                                </div>
                            </div>})}
                    </div>
                </>) }
        </div>
        </>
        
    )
}

export default Cart;