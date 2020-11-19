

export default class ProductService{
    getProducts = async () => {
        const response = await fetch('http://localhost:3000/products.json');
        if( response.ok ){
            return await response.json();
        }else{
            new Error("Can't fetch products");
        }
    }
}