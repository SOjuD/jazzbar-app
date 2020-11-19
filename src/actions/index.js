const productsLoaded = (books) =>{
    return {
        type: 'PRODUCTS_LOADED',
        payload: books
    }
}

export {
    productsLoaded
}