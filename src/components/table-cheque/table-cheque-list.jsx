import React from "react";
import {connect} from 'react-redux'

import {changedItemCount} from '../../actions';

const TableChequeListItem = ({title, count, total, id: productId, tableId, changedItemCount}) => {
    return(
        <div className="row">
            <div className="col-5">{title}</div>
            <div className="col-4">
                <input type="number"
                       value={count}
                       onChange={(evt) =>
                           changedItemCount(tableId, productId, evt.target.value)}/>
            </div>
            <div className="col-3">{`${total} руб`}</div>
            <div className="delete">X</div>
        </div>
    )
}

const TableChequeList = ({list, id: tableId}) => {
    return (
        <div className="tablePage-cheque-list">
            <div className="row tablePage-cheque-list-head">
                    <div className="col-5"><h6>Название</h6></div>
                    <div className="col-4"><h6>Количество</h6></div>
                    <div className="col-3"><h6>Итого</h6></div>
            </div>
            {
                list.map (el => {
                    return <TableChequeListItem
                        title={el.title}
                        count={el.count}
                        total={el.total}
                        id={el.ID}
                        key={el.ID}
                        tableId={tableId}
                    />
                })
            }
        </div>
    )
}

const mapDispatchToProps = {changedItemCount};

export default connect(null, mapDispatchToProps)(TableChequeList);