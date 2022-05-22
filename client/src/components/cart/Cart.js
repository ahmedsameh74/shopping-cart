import React, { useState } from "react";
import "../../css/cart/Cart.css";
import Checkout from "../checkout/Checkout";
import Bounce from "react-reveal/Bounce";

export default function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const closeForm = () => {
    setShowForm(false);
  };

  const submitOrder = (e) => {
    e.preventDefault();
    let order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Bounce left cascade>
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
                <button onClick={() => props.removeFromCart(item)}>
                  remove
                </button>
              </div>
            </div>
          </div>
        ))}
        {props.cartItems.length !== 0 && (
          <div className="cart-footer">
            <div className="total">
              total price : $
              {props.cartItems.reduce((a, b) => {
                return a + b.price;
              }, 0)}
            </div>
            <button onClick={() => setShowForm(true)}>select products</button>
          </div>
        )}

        {showForm && (
          <div className="checkout-form">
            <Checkout
              closeForm={closeForm}
              submitOrder={submitOrder}
              handleChange={handleChange}
            />
          </div>
        )}
      </div>
    </Bounce>
  );
}
