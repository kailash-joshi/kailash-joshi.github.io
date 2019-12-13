import React, { Fragment } from 'react';
const DateComponent = (props) => {
    return(
        <Fragment>
            <div>{props.dateStr}</div>
            <div className="day-ago-css">{props.daysDiffStr}</div>
        </Fragment>
    )
}
export default  DateComponent;