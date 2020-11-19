import {Route, Switch} from "react-router-dom";
import {SinglePage, TablesPage, TotalPage} from "../pages";
import React from "react";

const Main = () => {
    return (
        <main className="App">
            <Switch>
                <Route path="/" exact >
                    <TablesPage />
                </Route>
                <Route path="/single/:id" >
                    <SinglePage />
                </Route>
                <Route path="/total" >
                    <TotalPage />
                </Route>

            </Switch>
        </main>
    )
}

export default Main;