import React from 'react';
import {connect} from "react-redux";

import {closedTable} from '../../actions';
import {buildCheque} from '../../functions';
import {withTable} from '../hoc';

const TableChequeBtns = (props) => {
    const {id, closedTable} = props;
    return(
        <div className="row tablePage-cheque-btns">
            <div className="col-6">
                <button className="btn btn-secondary w-100"
                        onClick={()=> buildCheque(props)} >Распечатать</button>
            </div>
            <div className="col-6">
                <button className="btn btn-primary w-100"
                onClick={() => closedTable(id)} >Закрыть стол</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {closedTable}

export default connect(undefined,mapDispatchToProps)(withTable(TableChequeBtns));