import React, { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import Filter from "./components/filter/Filter";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

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

  const addToCart = (product) => {
    let cartItemsClone = [...cartItems];
    let isExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isExist = true;
      }
    });
    if (!isExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };

  const removeFromCart = (product) => {
    let cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((ele) => ele.id !== product.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <Filter
            productNumber={products.length}
            size={size}
            sort={sort}
            filterByOrder={filterByOrder}
            filterBySize={filterBySize}
          />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
