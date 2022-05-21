import React, { useState } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data);

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="filter">filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
