import React, { useState } from "react";
import Filter from "./components/filter/Filter";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const filterByOrder = (e) => {
    setSort(e.target.value);
    console.log(e.target.value);
    let productsClone = [...products];
    let newProducts = productsClone.sort((a, b) => {
      if (e.target.value === "lowest") {
        return a.price - b.price;
      } else if (e.target.value === "highst") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };
  const filterBySize = (e) => {
    setSize(e.target.value);
    // console.log(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let productsCopy = [...products];
      let newProducts = productsCopy.filter(
        (product) => product.size.indexOf(e.target.value) != -1
      );
      setProducts(newProducts);
    }
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            size={size}
            sort={sort}
            filterByOrder={filterByOrder}
            filterBySize={filterBySize}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
