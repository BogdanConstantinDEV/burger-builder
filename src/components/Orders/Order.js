import React from 'react'
import classes from './Order.module.css'

const Order = props => {

    return (
        <div className={classes.Order}>
            <p>Ingredients: {props.ingredients}</p>
            <p>Price: <strong>${props.price}</strong></p>
            <p>Name: <strong>{props.contactData.name}</strong></p>
            <p>Country: <strong>{props.contactData.country}</strong></p>
            <p>Delivery: <strong>{props.contactData.deliveryMethod}</strong></p>
        </div>
    )
}


export default Order
