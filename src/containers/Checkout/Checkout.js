import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

const Checkout = props => {

    return <React.Fragment>
        <CheckoutSummary ingredients={props.ings} price={props.prc} />
        <Route
            path={props.match.path + '/contact-data'}
            component={ContactData} />
    </React.Fragment>
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        prc: state.totalPrice.toFixed(2)
    }
}

export default connect(mapStateToProps)(Checkout)
