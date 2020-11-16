import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";
import { ProductService } from "./services/";
import { ProductsProvider } from "./context";

import store from './store';

const productService = new ProductService();

ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundry >
          <ProductsProvider value={productService}>
              <Router>
                  <App />
              </Router>
          </ProductsProvider>
      </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
