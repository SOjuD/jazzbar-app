const ProductsLoaded = (books) =>{
    return {
        type: 'BOOKS_LOADED',
        payload: books
    }
}

export {
    ProductsLoaded
}