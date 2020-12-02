import initialState from "./inital-state";
import {
    calcTableTotal,
    updateTableList,
    sortProducts,
    updateTables,
    togledModalDescription,
    closeTable,
    setLocalStorage} from '../functions';

const reducer = (state = initialState, action) => {
    let tableIndex,newTable, tables;

    switch (action.type) {
        case 'PRODUCTS_LOADED' :
            const products = sortProducts(action.payload);
            return {
                ...state,
                products,
                loading: false
            };
        case 'SALE_CHANGED' :
            tableIndex = state.tables.findIndex( el => el.id === action.tableId);
            newTable = calcTableTotal(state.tables[tableIndex], action.sale);
            tables = updateTables(state.tables, newTable, tableIndex);
            return setLocalStorage({
                ...state,
                tables
            });
        case 'PRODUCT_ADDED_TO_CHEQUE':
            tableIndex = state.tables.findIndex( el => el.id === action.tableId);
            newTable = updateTableList( state, tableIndex, action);
            tables = updateTables(state.tables, newTable, tableIndex);
            return setLocalStorage({
                ...state,
                tables
            });
        case 'TOGLED_MODAL_DESCRIPTION':
           return togledModalDescription(state, action);
        case 'CHANGED_PRODUCT_DESCRIPTION':
            tableIndex = state.tables.findIndex( el => el.id === action.tableId);
            newTable = updateTableList( state, tableIndex, action);
            tables = updateTables(state.tables, newTable, tableIndex);
            return setLocalStorage({
                ...state,
                tables
            });
        case 'CLOSED_TABLE':
            return setLocalStorage(closeTable(state, action.tableId))
        default :
            return state;
    }
}


export default reducer;