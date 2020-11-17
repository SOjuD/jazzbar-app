import React from "react";
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from "../header";
import {TablesPage, SinglePage, TotalPage} from '../pages';

function App({tables}) {
    return (<React.Fragment>
        <Header/>
        <main className="App">
            <Switch>
                <Route path="/" exact >
                    <TablesPage tables={tables} />
                </Route>
                <Route path="/single/:id" >
                    <SinglePage />
                </Route>
                <Route path="/total" >
                    <TotalPage />
                </Route>

            </Switch>
        </main>

    </React.Fragment>);
}

const mapStateToProps = ({ tables }) => {
    return { tables };
};

export default connect(mapStateToProps)(App);
