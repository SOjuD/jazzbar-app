import React, {useContext} from "react";
import StateContext from "../../context";
import {useParams} from 'react-router-dom';

const withTable = (Wrapped) => {
    return (props) => {
        const {id} = useParams();
        const {tables} = useContext(StateContext);
        const table = tables.find( el => el.id === id);

        return <Wrapped {...table} {...props}/>
    }
}

export default withTable;