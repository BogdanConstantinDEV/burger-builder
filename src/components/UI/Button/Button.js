import React from 'react'
import classes from './Button.module.css'

const Button = props => {

    const btnClasses = [classes.Button, classes[props.btnType]]
    return <button
        className={btnClasses.join(' ')}
        onClick={props.click}
        disabled={props.disabled}>
        {props.children}</button>
}
export default Button
