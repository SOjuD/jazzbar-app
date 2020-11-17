import React, {useContext, useEffect} from 'react';

import RouterLink from "../../router-link";
import ProductsContext from '../../../context';

import './tables-page.sass';

const TablesPage = ({tables}) => {
    const {getProducts} = useContext(ProductsContext);

    useEffect(() => {
        getProducts()
            .then(data => {
                console.log(data)
            })
    })

    return (
        <section className="tablesPage">
            <div className="container">
                <div className="row">
                    {
                        tables.map((table)=>{
                            return (
                                <div key={table.id} className="col-6 col-md-4 col-lg-3">
                                    <RouterLink  classNames="card py-4 tablesPage-item" path={`single/${table.id}`} >
                                        <h2 className={"text-center text-dark"} >{table.name}</h2>
                                    </RouterLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default TablesPage;