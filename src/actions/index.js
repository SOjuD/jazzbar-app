const productsLoaded = (books) => {
    return {
        type: 'PRODUCTS_LOADED',
        payload: books
    }
}

const SaleChanged = (sale, tableId) => {
    return {
        type: 'SALE_CHANGED',
        tableId,
        sale,
    }
}

const productAddedToCheque = (productId, table) => {
    return {
        type: 'PRODUC_ADDED_TO_CHEQUE',
        productId,
        table
    }
}

export {
    productsLoaded,
    SaleChanged,
    productAddedToCheque
}