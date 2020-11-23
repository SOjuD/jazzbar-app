import React, {useContext} from "react";
import {Link, useRouteMatch} from 'react-router-dom';
import StateContext from "../../context";

const ProductListNavElem = ({title}) => {
    const {url} = useRouteMatch();
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Link to={`${url}/${title}`}
                  replace
                  className="btn btn-info mb-3 w-100">
                {title}
            </Link>
        </div>
    )
}

const ProductListNav = () => {
    const {products} = useContext(StateContext);
    return (
        <div className="row productList-nav align-content-start">
            {
                Object.keys(products).map((el, idx) => {
                    return <ProductListNavElem title={el} key={idx}/>
                })
            }
        </div>
    )
}

export default ProductListNav;