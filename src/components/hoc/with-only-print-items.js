import React from 'react';

const withOnlyPrintItems = ({table}) => (Wrapped) =>{
    table.list = table.list.filter(el => el.isPrint === true)
    return <Wrapped table={table} />
}

export default withOnlyPrintItems;