import React, {useContext} from 'react';
import StateContext from "../../context";

const ProductList = () => {
    const {products} = useContext(StateContext);
    return (
        <div>
            {`Product list ${products}`}
        </div>
    )
}

export default ProductList;