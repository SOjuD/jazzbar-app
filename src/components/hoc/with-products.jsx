import React from 'react';
import { ProductsConsumer } from '../../context';

const withProducts = (Wrapped) => {
    return (props) => {
        return (
            <ProductsConsumer>
                {( productService) => {
                        return (<Wrapped
                                    {...props}
                                    productService={productService} />);
                }}
            </ProductsConsumer>
        );
    }
}
export default withProducts;