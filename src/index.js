import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";
import { ProductService } from "./services/";
import ProductsContext from "./context";

import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

const productService = new ProductService();

ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundry >
          <ProductsContext.Provider value={productService}>
              <Router>
                  <App />
              </Router>
          </ProductsContext.Provider>
      </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);


