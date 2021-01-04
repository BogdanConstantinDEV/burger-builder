import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const types = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
]

const BuildControls = props => {

    const controls =
        <div>
            <p>Current price: <strong>${props.price.toFixed(2)}</strong></p>
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
            {controls}
        </div>
    )
}

export default BuildControls




