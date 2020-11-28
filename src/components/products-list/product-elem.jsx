import React from "react";

const ProductElem = ({product}) => {
    return (
        <div className={"col-6 col-md-4"}>
            <div className="productList-item card mb-3 p-1 d-flex flex-column">
                <h6 className="productItem-title card-title text-center mt-2 flex-grow-1">{product.title}</h6>
                <button data-id={product.id} className={"btn btn-primary w-100"}>Добавить</button>
            </div>
        </div>
    )
}

export default ProductElem;