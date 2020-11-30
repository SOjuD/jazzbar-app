import React, {useContext} from "react";
import {Link, useRouteMatch} from 'react-router-dom';
import StateContext from "../../context";

import {Accordion, Card, Button} from "react-bootstrap";

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
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Категории
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className="row productList-nav align-content-start">
                            {
                                Object.keys(products).map((el, idx) => {
                                    return <ProductListNavElem title={el} key={idx}/>
                                })
                            }
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

export default ProductListNav;