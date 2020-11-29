import React, {useContext} from "react";
import {Link, useRouteMatch, } from 'react-router-dom';
import StateContext from "../../context";

import {DropdownButton, Dropdown} from "react-bootstrap";

const ProductListNavElem = ({title}) => {
    const {url} = useRouteMatch();
    return (
        <Dropdown.Item as={"div"}>
            <Link to={`${url}/${title}`}
                  replace>
                {title}
            </Link>
        </Dropdown.Item>
    )
}

const ProductListNav = () => {
    const {products} = useContext(StateContext);
    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {
                Object.keys(products).map((el, idx) => {
                    return <ProductListNavElem title={el} key={idx}/>
                })
            }
        </DropdownButton>

    )
}

export default ProductListNav;