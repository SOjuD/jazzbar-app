import React from "react";
import logo from './logo.svg';

import ChequeToPrintItem from "./cheque-to-print-item";

const ChequeToPrint = ({table}) => {
    const {name, list, subtotal, sale, total} = table;
    return (
        <div className="chequeToPrint">
            <img src={logo} className="chequeToPrint-logo" alt="jazzCafe"/>
            <ul>
                {
                    list.map( item => <ChequeToPrintItem item={item} key={item.ID} />)
                }
            </ul>
            <div className="chequeToPrint-title">Стол: {name}</div>
            <div className="chequeToPrint-subtotal">Подытог: {subtotal}</div>
            <div className="chequeToPrint-sale">Скидка: {sale}</div>
            <div className="chequeToPrint-total">Итог: {total}</div>
            <div className="chequeToPrint-total">Дата: {new Date().toLocaleDateString()}</div>
        </div>
    )
}

export default ChequeToPrint;