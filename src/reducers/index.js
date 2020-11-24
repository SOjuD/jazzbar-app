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

const findProduct = (products, productId) => {
    let product;
    for(const cat of Object.keys(products)) {
        product = products[cat].find(el => +el.ID === +productId);
        if(product) return product;
    }
}

const updateTableListItems = (table, newProduct, productIndexInList) => {
    if(productIndexInList < 0){
        return {
            ...table,
            list: [
                ...table.list,
                newProduct
            ]
        }
    }else{
        return {
            ...table,
            list: [
                ...table.list.slice(0, productIndexInList),
                newProduct,
                ...table.list.slice(productIndexInList + 1)
            ]
        }
    }
}

const updateTableListItem = (productInList = {}, product) => {

    const{
        id = product.ID,
        title = product.title,
        count = 0,
        total = 0,
        description = ''} = productInList

        return  {
            ID: id,
            title: title,
            count: count + 1,
            total: roundToTwo(total + product.price),
            description: description
        }
}

const updateTableList = ({products, tables}, tableIndex, productId) => {
    const table = tables[tableIndex];
    const productIndexInList = table.list.findIndex( el => +el.ID === +productId);
    const productInList = table.list[productIndexInList];
    let product = findProduct(products, productId);
    let newProduct = updateTableListItem(productInList, product);

    return updateTableListItems(table, newProduct, productIndexInList);
}

const sortProducts = (products) => {
    const modifyProducts = [...products];
    const sortedProducts = {};
    let lastCat;

    modifyProducts.forEach(el => {
        if( el.cat ) lastCat = el.cat;
        el.cat = el.cat ? el.cat : lastCat;

        if(!el.price) return;

        sortedProducts[el.cat] = sortedProducts[el.cat] || [];
        sortedProducts[el.cat].push(el);
    })

    return sortedProducts;
}

const updateTables = (tables, newTable, index) => {
    return [
        ...tables.slice(0, index),
        newTable, newTable,
        ...tables.slice(index + 1)
    ]
}

const reducer = (state = initialState, action) => {
    let tableIndex,newTable, tables;
    switch (action.type) {
        case 'PRODUCTS_LOADED' :
            const products = sortProducts(action.payload);
            return {
                ...state,
                products,
                loading: false
            }
        case 'SALE_CHANGED' :
            tableIndex = state.tables.findIndex( el => el.id === action.tableId);
            newTable = updateSale(state.tables[tableIndex], action.sale);
            tables = updateTables(state.tables, newTable, tableIndex);
            return {
                ...state,
                tables
            }
        case 'PRODUCT_ADDED_TO_CHEQUE':
            tableIndex = state.tables.findIndex( el => el.id === action.tableId);
            newTable = updateTableList(state, tableIndex, action.productId);
            tables = updateTables(state.tables, newTable, tableIndex);
            return {
                ...state,
                tables
            }
        // case 'CHANGED_ITEM_COUNT':

        default :
            return state;
    }
}


export default reducer;