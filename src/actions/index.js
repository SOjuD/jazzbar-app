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

const productAddedToCheque = (productId, tableId, productCount) => {
    return {
        type: 'PRODUCT_ADDED_TO_CHEQUE',
        productId,
        tableId,
        productCount
    }
}


export {
    productsLoaded,
    SaleChanged,
    productAddedToCheque,
}