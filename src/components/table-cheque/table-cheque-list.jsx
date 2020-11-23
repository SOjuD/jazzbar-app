import React from "react";
import {connect} from 'react-redux'

import {changedItemCount} from '../../actions';

const TableChequeListItem = ({title, count, total, id: productId, tableId, changedItemCount}) => {
    return(
        <tr>
            <th>{title}</th>
            <td>
                <input type="number"
                       value={count}
                       onChange={(evt) =>
                           changedItemCount(tableId, productId, evt.target.value)}/>
            </td>
            <td>{`${total} руб`}</td>
            <td className="delete">X</td>
        </tr>
    )
}

const TableChequeList = ({list, id: tableId}) => {
    return (
        <table className="table tablePage-cheque-list flex-grow-1">
            <thead>
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Итого</th>
                </tr>
            </thead>
            <tbody>
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
            </tbody>
        </table>
    )
}

const mapDispatchToProps = {changedItemCount};

export default connect(null, mapDispatchToProps)(TableChequeList);