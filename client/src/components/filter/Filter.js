import React from "react";
import "../../css/filter/Filter.css";

export default function Filter(props) {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="num-of-products">
        Number of Products {props.productNumber}
      </div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select
          className="filter-select"
          onChange={props.filterBySize}
          value={props.size}
        >
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select
          className="filter-select"
          onChange={props.filterByOrder}
          value={props.sort}
        >
          <option value="latest">latest</option>
          <option value="highst">highst</option>
          <option value="lowest">lowest</option>
        </select>
      </div>
    </div>
  );
}
