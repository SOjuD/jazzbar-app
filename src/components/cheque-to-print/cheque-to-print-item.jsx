import React from "react";

import {roundToTwo} from '../../functions';

const ChequeToPrintItem = ({item}) => {
    const {title, count, total, description} = item;
    return(
        <>
            <tr>
                <td>{title}</td>
                <td>{roundToTwo(total/count)} р.</td>
                <td>{count} шт.</td>
                <td>{total} р.</td>
            </tr>
            {description ? <tr><td colSpan={4}>{description}</td></tr> : null}
        </>
    )
}

export default ChequeToPrintItem;