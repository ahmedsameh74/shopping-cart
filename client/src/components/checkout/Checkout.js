import React from "react";
import "../../css/checkout/Checkout.css";

export default function Checkout(props) {
  return (
    <>
      <span className="close" onClick={props.closeForm}>
        &times;
      </span>
      <form onSubmit={(e) => props.submitOrder(e)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            required
            name="name"
            onChange={(e) => props.handleChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            name="email"
            onChange={(e) => props.handleChange(e)}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}
