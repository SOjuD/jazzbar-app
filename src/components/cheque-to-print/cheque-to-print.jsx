import React from "react";
import logo from './logo.svg';

import ChequeToPrintItem from "./cheque-to-print-item";
import {withOnlyPrintItems} from '../hoc';


const ChequeToPrint = ({table}) => {
    const {name, list, subtotal, saleCapacity, total, sale} = table;
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
                <tbody>
                    {
                        list.map( item => {
                            return <ChequeToPrintItem item={item} key={item.id} />
                        })
                    }
                </tbody>
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
                <div>Процент скидки:</div>
                <div>{sale}%</div>
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

export default withOnlyPrintItems(ChequeToPrint);