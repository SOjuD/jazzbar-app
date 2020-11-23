import React from 'react';

import ProductListNav from "./product-list-nav";
import ProductListTabs from './product-list-tabs'

import './produc-list.sass';

const ProductList = () => {

    return (
        <div className="productList d-flex flex-column">
            <ProductListNav />
            <ProductListTabs />
        </div>
    )
}

export default ProductList;