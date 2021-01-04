import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = props => {
    return <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.clickRem}
            disabled={props.isDisabled}
        >Less</button>
        <button
            className={classes.More}
            onClick={props.clickAdd}
        >More</button>
    </div>
}

export default BuildControl