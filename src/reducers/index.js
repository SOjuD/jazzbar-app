import initialState from "./inital-state";

const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
}

const updateSale = (table, sale) => {
    const ratio = (100 - sale) / 100;
    const total = roundToTwo( table.subtotal * ratio );
    table.sale = sale;
    table.total = total;
    return table;
}

const updateTables = (tables, newTable, index) => {
    return [
        ...tables.slice(0, index),
        newTable, newTable,
        ...tables.slice(index + 1)
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADED' :
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case 'SALE_CHANGED' :
            const index = state.tables.findIndex( el => el.id === action.tableId);
            const newTable = updateSale(state.tables[index], action.sale);
            const tables = updateTables(state.tables, newTable, index);
            return {
                ...state,
                tables
            }
        default :
            return state;
    }
}


export default reducer;