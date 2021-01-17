import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = props => {
    let allClasses = [classes.Backdrop]
    if (props.onlyMobile) allClasses.push(classes.onlyMobile)
    return <div
        className={allClasses.join(' ')}
        onClick={props.click}
    ></ div>
}

export default Backdrop
