import React from "react";

import Delete from "../delete";

import plus from './svg/plus.svg'
import minus from './svg/minus.svg'

const TableChequeListItem = ({title, count, total,
                             id: productId, tableId, productAddedToCheque,
                             togledModalDescription}) => {
    return(
        <div className="row">
            <div className="col-5 tableList-title"
                onClick={()=>{togledModalDescription(tableId, productId)}}>
                {title}
            </div>
            <div className="col-4 d-flex justify-content-around align-items-center">
                <img
                    alt='plus'
                    src={plus}
                    onClick={() => productAddedToCheque(productId, tableId)} />
                <h6>{count}</h6>
                <img
                    alt='minus'
                    src={minus}
                    onClick={() => productAddedToCheque(productId, tableId, -1)} />
            </div>
            <div className="col-3">{`${total} руб`}</div>
            <div
                className="delete"
                onClick={ () => productAddedToCheque(productId, tableId, -10000) }>
                <Delete/>
            </div>
        </div>
    )
}

export default TableChequeListItem;