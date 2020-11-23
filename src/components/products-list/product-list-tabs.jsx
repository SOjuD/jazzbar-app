import React from "react";
import {Switch, Route, useRouteMatch, useParams} from 'react-router';
import {connect} from 'react-redux';

import {productAddedToCheque} from '../../actions';

const ProductElem = ({product}) => {
    return (
        <div className={"col-6 col-md-4"}>
            <div className="productList-item card mb-3 p-1 d-flex flex-column">
                <h6 className="productItem-title card-title text-center mt-2 flex-grow-1">{product.title}</h6>
                <button data-id={product.ID} className={"btn btn-primary w-100"}>Добавить</button>
            </div>
        </div>
    )
}

const addProduct = (evt, tableId, productAddedToCheque) => {
    const {target} = evt;
    if( target.tagName !== "BUTTON" ) return;
    productAddedToCheque(target.dataset.id, tableId)
}

const ProductListTabs = ({products, productAddedToCheque}) => {
    const {path} = useRouteMatch();
    const {id} = useParams();

    return (
        <div className={"row productList-tab"}
             onClick={(evt) => addProduct(evt, id, productAddedToCheque) }>
            <Switch>
                {
                    Object.keys(products).map((cat, idx) => {
                        return (
                        <Route path={`${path}/${cat}`} key={`cat-${idx}`}>
                        {
                            products[cat].map(el =>{
                                return <ProductElem product={el} key={el.ID}/>
                            })
                        }
                        </Route>
                        )
                    })
                }
            </Switch>
        </div>
    )
}

const setStateToProps = ({products}) => {
    return {
        products
    }
}
const  mapDispatchToProps = {productAddedToCheque};

export default connect(setStateToProps, mapDispatchToProps)(ProductListTabs);