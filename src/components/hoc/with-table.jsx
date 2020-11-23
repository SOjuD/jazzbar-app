import React, {useContext} from "react";
import StateContext from "../../context";

const withTable = (Wrapped) => {
    return (props) => {
        const {tables} = useContext(StateContext);
        const table = tables.find( el => el.id === props.id);

        return <Wrapped {...table} {...props}/>
    }
}

export default withTable;