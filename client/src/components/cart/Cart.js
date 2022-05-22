import React from "react";
import "../../css/cart/Cart.css";

export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length > 0
          ? `your cart have ${props.cartItems.length} items`
          : `your cart is empty`}
      </div>
      {props.cartItems.map((item) => (
        <div className="cart-items" key={item.id}>
          <div className="cart-item">
            <img src={item.imageUrl} alt={item.title} />
            <div className="cart-info">
              <div>
                <p>title: {item.title}</p>
                <p>qty: {item.qty}</p>
                <p>price: ${item.price}</p>
              </div>
              <button onClick={() => props.removeFromCart(item)}>remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
