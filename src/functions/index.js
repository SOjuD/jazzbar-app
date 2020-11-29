import React from "react";
import ReactDOM from 'react-dom';

import ChequeToPrint from "../components/cheque-to-print/";

const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
}

const setSessionStorage = (state) => {
    const {tables, total} = state
    window.sessionStorage.setItem('tables', JSON.stringify(tables));
    window.sessionStorage.setItem('total', total);
    return state
}

const calcTableSubtotal = (table) => {

    let subtotal = 0;

    table.list.forEach( el => {
        subtotal += el.total;
    })

    return {
        ...table,
        subtotal: roundToTwo(subtotal)
    }
}

const calcTableTotal = (table, sale = table.sale) => {
    const ratio = (100 - sale) / 100;
    const total = roundToTwo( table.subtotal * ratio );
    table.sale = sale;
    table.total = total;
    table.saleCapacity = roundToTwo(table.subtotal - table.total);
    return table;
}

const findProduct = (products, productId) => {
    let product;
    for(const cat of Object.keys(products)) {
        product = products[cat].find(el => +el.id === +productId);
        if(product) return product;
    }
}

const updateTableListItems = (table, newProduct, productIndexInList) => {

    if(newProduct.count <= 0){
        return {
            ...table,
            list: [
                ...table.list.slice(0, productIndexInList),
                ...table.list.slice(productIndexInList + 1)
            ]
        }
    }

    if(productIndexInList < 0){
        return {
            ...table,
            list: [
                ...table.list,
                newProduct
            ]
        }
    }else{
        return {
            ...table,
            list: [
                ...table.list.slice(0, productIndexInList),
                newProduct,
                ...table.list.slice(productIndexInList + 1)
            ]
        }
    }
}

const updateTableListItem = (tableId, productInList = {}, product, productCount, newDescription) => {

    if(newDescription !== undefined) {
        return {
            ...productInList,
            description: newDescription
        }
    }
    let{
        id = product.id,
        title = product.title,
        count = 0,
        description = undefined} = productInList;

    if(productCount === undefined) count += 1;
    else count += productCount;

    const price = tableId !== 'pickup-table' ? product.price : product['price_sale'] || product.price;

    return  {
        id: id,
        title: title,
        count: count,
        total: roundToTwo(count * price),
        description: description
    }
}

const updateTableList = ({products, tables}, tableIndex, action) => {
    const {productId, productCount, description, tableId} = action;
    const table = tables[tableIndex];
    const productIndexInList = table.list.findIndex( el => +el.id === +productId);
    const productInList = table.list[productIndexInList];
    let product = findProduct(products, productId);

    let newProduct = updateTableListItem(tableId, productInList, product, productCount, description);

    let newTable = updateTableListItems(table, newProduct, productIndexInList);
    newTable = calcTableSubtotal(newTable);
    newTable = calcTableTotal(newTable);

    return newTable;
}

const sortProducts = (products) => {
    const modifyProducts = [...products];
    const sortedProducts = {};

    modifyProducts.forEach(el => {
        const cats = el.cats.split(', ');
        cats.forEach(cat => {
            sortedProducts[cat] = sortedProducts[cat] || [];
            sortedProducts[cat].push(el);
        })
    })

    return sortedProducts;
}

const updateTables = (tables, newTable, index) => {
    return [
        ...tables.slice(0, index),
        newTable,
        ...tables.slice(index + 1)
    ]
}

const togledModalDescription = (state, action) => {
    const { tableId = null,
        productId = null} = action;
    return {
        ...state,
        descriptionParams: {
            ...state.descriptionParams,
            isOpen: !state.descriptionParams.isOpen,
            tableId,
            productId,
        }
    }
}

const buildCheque = (table)=>{
    const WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    const CSS = `
          <style>
            *{
              font-size: 20px;
              line-height: 1.8;
            }
            img {
            display: block;
            margin: 0 auto;
            }
            ul{
                border-bottom: 2px solid #c4c4c4;
                border-top: 2px solid #c4c4c4;
                padding: 30px 20px 30px 50px;
                margin: 30px 0;
            }
        </style>`;
    WinPrint.document.write(CSS);
    WinPrint.document.write('<div id="root" ></div>');
    ReactDOM.render(<ChequeToPrint table={table} />,
        WinPrint.document.getElementById('root'));
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();

}

const closeTable = (state, tableId) => {
    const {tables} = state;
    const tableIndex = tables.findIndex(el => el.id === tableId);
    const total = +state.total + +tables[tableIndex].total;

    buildCheque(tables[tableIndex]);

    const newTable = {
        id: tables[tableIndex].id,
        name: tables[tableIndex].name,
        list: [],
        subtotal: 0,
        sale: 0,
        total: 0
    }

    return {
        ...state,
        tables: [
            ...state.tables.slice(0, tableIndex),
            newTable,
            ...state.tables.slice(tableIndex + 1),
        ],
        total
    };
}

export {
    roundToTwo,
    calcTableSubtotal,
    calcTableTotal,
    findProduct,
    updateTableListItems,
    updateTableListItem,
    updateTableList,
    sortProducts,
    updateTables,
    togledModalDescription,
    closeTable,
    buildCheque,
    setSessionStorage

}