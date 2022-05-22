import React from "react";
import "../../css/filter/Filter.css";

export default function Filter(props) {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="num-of-products">Number of Products 4</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select className="filter-select">
          <option value="ALL">ALL</option>
          <option value="x">X</option>
          <option value="s">S</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-select">
          <option value="latest">latest</option>
          <option value="highst">highst</option>
          <option value="lowest">lowest</option>
        </select>
      </div>
    </div>
  );
}
