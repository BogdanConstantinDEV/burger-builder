import React from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

const OrderInfo = props => {
    const listIng = Object.keys(props.ingredients)
        .map(el => el)
        .filter(el => props.ingredients[el] > 0)
        .map(igKey => <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>)

    return (
        <Aux>
            <h3>Your order</h3>
            <p>An awesome burger with your favorite ingredients</p>
            <ul>
                {listIng}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' click={props.cancelPurcashe}>Cancel</Button>
            <Button btnType='Success' click={props.continuePurcashe}>Continue</Button>
        </Aux>
    )
}
export default OrderInfo
