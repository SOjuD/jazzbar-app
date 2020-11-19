import React, {useContext} from "react";
import StateContext from "../../context";

const withTable = (Wrapped) => {
    return ({id}) => {
        const {tables} = useContext(StateContext);
        const table = tables.find( el => el.id === id);

        return <Wrapped {...table}/>
    }
}

export default withTable;