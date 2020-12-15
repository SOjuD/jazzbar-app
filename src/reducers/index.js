import initialState from "./inital-state";
import {
    calcTableTotal,

    sortProducts,
    updateTables,
    togledModalDescription,
    closeTable,
    setLocalStorage,
    updateProducts,
    togleIsPrintAll} from '../functions';

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
            case 'TOGLED_MODAL_DESCRIPTION':
                return togledModalDescription(state, action);
        case 'PRODUCT_ADDED_TO_CHEQUE':
        case 'CHANGED_PRODUCT_DESCRIPTION':
        case 'TOGLED_IS_PRINT':
            return updateProducts(state, action)
        case 'TOGLED_IS_PRINT_ALL':
            return togleIsPrintAll(state, action)
        case 'CLOSED_TABLE':
            return setLocalStorage(closeTable(state, action.tableId))
        default :
            return state;
    }
}


export default reducer;