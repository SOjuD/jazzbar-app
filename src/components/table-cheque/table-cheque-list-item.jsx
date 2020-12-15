import React from "react";

import Delete from "../delete";

import plus from './svg/plus.svg'
import minus from './svg/minus.svg'

const TableChequeListItem = (params) => {

    const { title, count, total, isPrint,
            id: productId, tableId, productAddedToCheque,
            togledModalDescription, togledIsPrint} = params;

    const changeIsPrint = ({target}) => togledIsPrint(tableId, productId, target.checked);

    return(
        <div className="row">
            <div className="col-1 tableList-isPrint">
                <input 
                    type="checkbox"
                    name={`isPrint-${productId}`}
                    checked={isPrint}
                    onChange={changeIsPrint} />
            </div>
            <div    className="col-5 tableList-title"
                    onClick={()=>{togledModalDescription(tableId, productId)}}>
                {title}
            </div>
            <div className="col-3 d-flex justify-content-around align-items-center">
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
                onClick={ () => productAddedToCheque(productId, tableId, -count) }>
                <Delete/>
            </div>
        </div>
    )
}

export default TableChequeListItem;