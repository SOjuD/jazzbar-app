import React, {useContext} from 'react';

import RouterLink from "../../router-link";
import StateContext from "../../../context";

import './tables-page.sass';

const TablesPage = () => {

    const {tables} = useContext(StateContext);
    return (
        <section className="tablesPage">
            <div className="container">
                <div className="row">
                    {
                        tables.map((table)=>{
                            const cardClass = table.list.length ? 'tablesPage-item_dark' : 'tablesPage-item';
                            return (
                                <div key={table.id} className="col-6 col-md-4 col-lg-3">
                                    <RouterLink  classNames={`card py-4 ${cardClass}`} path={`single/${table.id}`} >
                                        <h2 className="text-center" >{table.name}</h2>
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