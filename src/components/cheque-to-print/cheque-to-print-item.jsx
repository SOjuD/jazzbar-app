import React from "react";

const ChequeToPrintItem = ({item}) => {
    const {title, count, total, description} = item;
    return(
        <li>
            <div>{`${title} - ${count} шт, ${total} руб`}</div>
            {description ? <div>{description}</div> : null}
        </li>
    )
}

export default ChequeToPrintItem;