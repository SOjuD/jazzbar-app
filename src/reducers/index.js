import initialState from "./inital-state";

const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
}

const calcTableSubtotal = (table) => {

    let subtotal = 0;

    table.list.forEach( el => {
        subtotal += el.total;
    })

    return {
        ...table,
        subtotal: roundToTwo(subtotal)
    }
}

const calcTableTotal = (table, sale = table.sale) => {
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

    if(newProduct.count <= 0){
        return {
            ...table,
            list: [
                ...table.list.slice(0, productIndexInList),
                ...table.list.slice(productIndexInList + 1)
            ]
        }
    }

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

const updateTableListItem = (productInList = {}, product, productCount) => {

    let{
        id = product.ID,
        title = product.title,
        count = 0,
        description = ''} = productInList;

    if(productCount === undefined) count += 1;
    else count = productCount;

    return  {
        ID: id,
        title: title,
        count: count,
        total: roundToTwo(count * product.price),
        description: description
    }
}

const updateTableList = ({products, tables}, tableIndex, productId, productCount) => {
    const table = tables[tableIndex];
    const productIndexInList = table.list.findIndex( el => +el.ID === +productId);
    const productInList = table.list[productIndexInList];
    let product = findProduct(products, productId);
    let newProduct = updateTableListItem(productInList, product, productCount);

    let newTable = updateTableListItems(table, newProduct, productIndexInList);
    newTable = calcTableSubtotal(newTable);
    newTable = calcTableTotal(newTable);

    return newTable;
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

const togledModalDescription = (state, action) => {
    const { tableId = null,
            productId = null} = action;
    console.log(action)
    return {
        ...state,
        descriptionParams: {
            ...state.descriptionParams,
            isOpen: !state.descriptionParams.isOpen,
            tableId,
            productId,
        }
    }
}

const changedModalDescription = (state, action) => {
    return {
        ...state,
        descriptionParams: {
            ...state.descriptionParams,
            productId: action.productId,
            tableId: action.tableId
        }
    }
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
            };
        case 'SALE_CHANGED' :
            tableIndex = state.tables.findIndex( el => el.id === action.tableId);
            newTable = calcTableTotal(state.tables[tableIndex], action.sale);
            tables = updateTables(state.tables, newTable, tableIndex);
            return {
                ...state,
                tables
            };
        case 'PRODUCT_ADDED_TO_CHEQUE':
            tableIndex = state.tables.findIndex( el => el.id === action.tableId);
            newTable = updateTableList(
                                    state,
                                    tableIndex,
                                    action.productId,
                                    action.productCount);
            tables = updateTables(state.tables, newTable, tableIndex);
            return {
                ...state,
                tables
            };
        case 'TOGLED_MODAL_DESCRIPTION':
           return togledModalDescription(state, action);
        case 'CHANGED_PRODUCT_DESCRIPTION':
            return changedModalDescription(state, action);
        default :
            return state;
    }
}


export default reducer;