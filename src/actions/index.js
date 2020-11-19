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

export {
    productsLoaded,
    SaleChanged
}