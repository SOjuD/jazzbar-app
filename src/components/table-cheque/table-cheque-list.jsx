import React from "react";
import {connect} from 'react-redux'

import {productAddedToCheque, togledModalDescription} from '../../actions';
import TableChequeListItem from "./table-cheque-list-item";

const TableChequeList = ({  list, id: tableId, productAddedToCheque,
                            togledModalDescription}) => {
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
                        description={el.description}
                        productAddedToCheque={productAddedToCheque}
                        togledModalDescription={togledModalDescription}
                    />
                })
            }
        </div>
    )
}

const mapDispatchToProps = {productAddedToCheque, togledModalDescription};

export default connect(null, mapDispatchToProps)(TableChequeList);