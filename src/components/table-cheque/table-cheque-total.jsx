import React from "react";
import {connect} from 'react-redux';

import {SaleChanged} from '../../actions';

const TableChequeTotal = ({subtotal, sale, total, id, saleCapacity, SaleChanged}) => {
    const changeSale = (evt) => {
        SaleChanged(evt.target.value, id);
    }
    return (
        <table className="tablePage-cheque-total table">
            <tbody>
                <tr>
                    <th>Подытог</th>
                    <td>{`${subtotal} руб`}</td>
                </tr>
                <tr>
                    <th>
                        Скидка
                        <input type="number" value={sale} onChange={changeSale}/>
                        %
                    </th>
                    <td>
                        {`${saleCapacity} руб`}
                    </td>
                </tr>
                <tr>
                    <th>Итого</th>
                    <td>{`${total} руб`}</td>
                </tr>
            </tbody>
        </table>
    );
}
const mapDispatchToProps = {SaleChanged};
export default connect(undefined, mapDispatchToProps)(TableChequeTotal);

