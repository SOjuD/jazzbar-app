import React from 'react';

import TableChequeList from "./table-cheque-list";
import TableChequeTotal from "./table-cheque-total";
import {withTable} from "../hoc/";

import "./table-cheque.sass";

const TableCheque = ({total, sale, subtotal, id}) => {
    return (
        <div className="tablePage-cheque d-flex flex-column">
            <TableChequeList />
            <TableChequeTotal
                subtotal={subtotal}
                sale={sale}
                total={total}
                id={id}
            />
        </div>
    );
}

export default withTable(TableCheque);