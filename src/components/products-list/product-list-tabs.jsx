import React from "react";
import {Switch, Route, useRouteMatch, useParams} from 'react-router';
import {connect} from 'react-redux';

import {productAddedToCheque} from '../../actions';
import ProductElem from './product-elem';



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
                                return <ProductElem product={el} key={el.id}/>
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