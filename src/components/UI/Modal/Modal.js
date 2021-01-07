import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const Modal = props =>
    <Aux>
        {props.trigger ? <Backdrop click={props.closeBack} /> : null}
        <div
            className={classes.Modal}
            style={{
                transform: props.trigger ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.trigger ? 1 : 0
            }}
        >{props.children}
        </div>
    </Aux>

export default Modal