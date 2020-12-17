import React from 'react';

import {roundToTwo, calcTableTotal} from '../../functions';

const withOnlyPrintItems = (Wrapped) => ({table}) =>{
    const fileredTable = {...table};
    const reducer = (accumulator, currentValue) => accumulator + currentValue.total;

    fileredTable.list = table.list.filter(el => el.isPrint);
    fileredTable.subtotal = roundToTwo( fileredTable.list.reduce(reducer, 0));
    const newTable = calcTableTotal(fileredTable, fileredTable.sale);

    return <Wrapped table={newTable} />
}

export default withOnlyPrintItems;