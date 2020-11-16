import React from "react";

import { withProducts } from '../hoc';

function App({ productService: { getProducts } }) {
    getProducts()
        .then(products => {
            console.log(products);
        })
  return (
    <div className="App">
      hello react world from App!!
    </div>
  );
}

export default withProducts(App);
