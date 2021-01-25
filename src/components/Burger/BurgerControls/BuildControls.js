import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const types = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = props => {

    const controls =
        <div>
            {
                types.map(el => (
                    <BuildControl
                        label={el.label}
                        key={el.label}
                        clickAdd={() => props.addItem(el.type)}
                        clickRem={() => props.remItem(el.type)}
                        isDisabled={props.disabledInfo[el.type]}
                    />))
            }
        </div>


    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls}
            <button
                className={classes.OrderButton}
                onClick={props.viewOrder}
                disabled={props.orderBtn_Disabled}>
                OrderButton</button>
        </div>
    )
}

export default BuildControls




