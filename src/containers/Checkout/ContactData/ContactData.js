import React from 'react'
import classes from './ContactData.module.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'

const ContactData = props => {

    const placeOrder = e => {
        e.preventDefault()
        const orderData = {
            ingredients: props.ingredients,
            price: props.price,
            customer: {
                name: 'Bivolu',
                adress: {
                    street: 'Bivolu Street',
                    number: 69,
                    zipcode: 123456,
                    country: 'Fairyland',
                }
            },
            email: 'balls.deep@yeah.nope',
            deliveryMethod: 'fast as fuck'
        }
        axios.post('/orders.json', orderData)
            .then(() => props.history.push('/'))
            .catch(err => {
                props.history.push('/')
                alert(err.message)
            })

    }


    return <div className={classes.ContactData}>
        <h3>Enter your data</h3>
        <form>
            <input type='text' name='name' placeholder='Your name' />
            <input type='email' name='email' placeholder='Your email' />
            <input type='text' name='street' placeholder='Street' />
            <input type='text' name='postalCode' placeholder='Postal Code' />
            <Button
                btnType='Success'
                click={placeOrder}>
                ORDER</Button>
        </form>
    </div>
}

export default ContactData
