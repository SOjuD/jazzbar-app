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

const updateTableListItem = (tableId, productInList = {}, product, productCount, newDescription) => {

    if(newDescription !== undefined) {
        return {
            ...productInList,
            description: newDescription
        }
    }
    let{
        id = product.ID,
        title = product.title,
        count = 0,
        description = undefined} = productInList;

    if(productCount === undefined) count += 1;
    else count = productCount;

    const price = tableId !== 'pickup-table' ? product.price : product['price_sale'] || product.price;

    return  {
        ID: id,
        title: title,
        count: count,
        total: roundToTwo(count * price),
        description: description
    }
}

const updateTableList = ({products, tables}, tableIndex, action) => {
    const {productId, productCount, description, tableId} = action;
    const table = tables[tableIndex];
    const productIndexInList = table.list.findIndex( el => +el.ID === +productId);
    const productInList = table.list[productIndexInList];
    let product = findProduct(products, productId);

    let newProduct = updateTableListItem(tableId, productInList, product, productCount, description);

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
        newTable,
        ...tables.slice(index + 1)
    ]
}

const togledModalDescription = (state, action) => {
    const { tableId = null,
        productId = null} = action;
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

const closeTable = (state, tableId) => {
    const {tables} = state;
    const tableIndex = tables.findIndex(el => el.id === tableId);
    const total = state.total + tables[tableIndex].total;

    const newTable = {
        id: tables[tableIndex].id,
        name: tables[tableIndex].name,
        list: [],
        subtotal: 0,
        sale: 0,
        total: 0
    }

    return {
        ...state,
        tables: [
            ...state.tables.slice(0, tableIndex),
            newTable,
            ...state.tables.slice(tableIndex + 1),
        ],
        total
    };
}

export {
    roundToTwo,
    calcTableSubtotal,
    calcTableTotal,
    findProduct,
    updateTableListItems,
    updateTableListItem,
    updateTableList,
    sortProducts,
    updateTables,
    togledModalDescription,
    closeTable

}