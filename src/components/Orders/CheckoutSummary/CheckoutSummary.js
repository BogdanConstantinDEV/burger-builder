import React from 'react'
import Burger from '../../Burger/Burger'
import classes from './CheckoutSummary.module.css'
import Button from '../../UI/Button/Button'
import { withRouter } from 'react-router-dom'

const CheckoutSummary = props => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>Enjoy your awesome burger</h1>
            <Burger ingredients={props.ingredients} />
            <h2>Price: <strong>${props.price}</strong></h2>
            <Button
                btnType='Danger'
                click={() => props.history.replace('/')}>
                Cancel</Button>
            <Button
                btnType='Success'
                click={() => props.history.push(props.match.path + '/contact-data')}>
                Continue</Button>
        </div>
    )
}

export default withRouter(CheckoutSummary)
// export default CheckoutSummary
