import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import Header from "../header";
import Main from "../main";
import Spinner from "../spinner";
import {ProductService} from "../../services/";
import {productsLoaded} from '../../actions';
import StateContext from "../../context";

function App({loading, productsLoaded, ...rest}) {

    const {getProducts} = new ProductService();
    useEffect(()=>{
        getProducts()
            .then(data => {
                productsLoaded(data);
            })
    }, [])

    if(loading) return <Spinner />
    return (<Router>
                <Header/>
                <StateContext.Provider value={rest} >
                    <Main />
                </StateContext.Provider>
            </Router>);
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    productsLoaded
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
