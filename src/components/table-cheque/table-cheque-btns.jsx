import React from 'react';

const TableChequeBtns = ({id}) => {
    return(
        <div className="row tablePage-cheque-btns">
            <div className="col-6">
                <button className="btn btn-secondary w-100">Распечатать</button>
            </div>
            <div className="col-6">
                <button className="btn btn-primary w-100">Закрыть стол</button>
            </div>
        </div>
    )
}

export default TableChequeBtns;