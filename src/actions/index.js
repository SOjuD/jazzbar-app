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

const productAddedToCheque = (productId, tableId) => {
    return {
        type: 'PRODUCT_ADDED_TO_CHEQUE',
        productId,
        tableId
    }
}

const changedItemCount = (tableId, productId, count = 1) => {
    return {
        type: 'CHANGED_ITEM_COUNT',
        productId,
        tableId
    }
}

export {
    productsLoaded,
    SaleChanged,
    productAddedToCheque,
    changedItemCount
}