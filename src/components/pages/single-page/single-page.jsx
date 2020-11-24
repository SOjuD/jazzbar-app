import React from 'react';
import {useParams} from 'react-router';

import TableCheque from "../../table-cheque";
import ProductList from "../../products-list";
import ModalDescription from "../../modal";

import "./single-page.sass";

const SinglePage = () => {

    const { id } = useParams();

    return (
        <>
            <section className="singlePage">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <TableCheque id={id} />
                        </div>
                        <div className="col-12 col-lg-7">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </section>
            <ModalDescription />
        </>
    );
}

export default SinglePage;