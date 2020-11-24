import React from "react";

import Delete from "../delete";

const TableChequeListItem = ({title, count, total,
                             id: productId, tableId, productAddedToCheque,
                             togledModalDescription}) => {
    return(
        <div className="row">
            <div className="col-5 tableList-title"
                onClick={()=>{togledModalDescription(tableId, productId)}}>
                {title}
            </div>
            <div className="col-4">
                <input type="number"
                       value={count}
                       onChange={(evt) =>
                           productAddedToCheque(tableId, productId, evt.target.value)}/>
            </div>
            <div className="col-3">{`${total} руб`}</div>
            <div
                className="delete"
                onClick={ () => productAddedToCheque(productId, tableId, 0) }>
                <Delete/>
            </div>
        </div>
    )
}

export default TableChequeListItem;