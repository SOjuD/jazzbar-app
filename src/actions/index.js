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

const togledModalDescription = (tableId, productId) => {
    return {
        type: 'TOGLED_MODAL_DESCRIPTION',
        tableId,
        productId
    }
}

const changedProductDescription = (tableId, productId, description) => {
    return {
        type: 'CHANGED_PRODUCT_DESCRIPTION',
        tableId,
        productId,
        description
    }
}


export {
    productsLoaded,
    SaleChanged,
    productAddedToCheque,
    togledModalDescription,
    changedProductDescription
}