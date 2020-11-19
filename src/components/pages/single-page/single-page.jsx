import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';

import TableList from "../../table-list";
import ProductList from "../../products-list";
import StateContext from "../../../context";

import "./single-page.sass";

const SinglePage = () => {

    const { id } = useParams();
    const {products, tables} = useContext(StateContext);
    const table = tables.find( el => el.id === id);

    return (
        <section className="singlePage">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <TableList table={table}/>
                    </div>
                    <div className="col-12 col-lg-7">
                        <ProductList products={products}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SinglePage;