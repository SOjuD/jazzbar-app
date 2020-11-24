import React from "react";

const TableChequeListItem = ({title, count, total, id: productId, tableId, productAddedToCheque}) => {
    return(
        <div className="row">
            <div className="col-5">{title}</div>
            <div className="col-4">
                <input type="number"
                       value={count}
                       onChange={(evt) =>
                           productAddedToCheque(productId, tableId, evt.target.value)}/>
            </div>
            <div className="col-3">{`${total} руб`}</div>
            <div className="delete">X</div>
        </div>
    )
}

export default TableChequeListItem;