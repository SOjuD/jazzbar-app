import React from "react";

const ChequeToPrintItem = ({item}) => {
    const {title, count, total, description} = item;
    return(
        <>
            <tr>
                <td>{title}</td>
                <td>{total/count} р.</td>
                <td>{count} шт.</td>
                <td>{total} р.</td>
            </tr>
            {description ? <tr><td colSpan={4}>{description}</td></tr> : null}
        </>
    )
}

export default ChequeToPrintItem;