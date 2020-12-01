import React from "react";
import logo from './logo.svg';

import ChequeToPrintItem from "./cheque-to-print-item";


const ChequeToPrint = ({table}) => {
    const {name, list, subtotal, saleCapacity, total} = table;
    return (
        <div className="chequeToPrint">
            <img src={logo} className="chequeToPrint-logo" alt="jazzCafe"/>
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Кол-во</th>
                        <th>Итого</th>
                    </tr>
                </thead>
                {
                    list.map( item => <ChequeToPrintItem item={item} key={item.id} />)
                }
            </table>
            <div className="chequeToPrint-title">
                <div>Стол: </div>
                <div>{name}</div>
            </div>
            <div className="chequeToPrint-subtotal">
                <div>Подытог:</div>
                <div>{subtotal} р.</div>
            </div>
            <div className="chequeToPrint-sale">
                <div>Скидка:</div>
                <div>{saleCapacity} р.</div>
            </div>
            <div className="chequeToPrint-total">
                <div>Итог:</div>
                <div>{total} р.</div>
            </div>
            <div className="chequeToPrint-total">
                <div>Дата:</div>
                <div>{new Date().toLocaleDateString()}</div>
            </div>
        </div>
    )
}

export default ChequeToPrint;