import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Orders/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

const Checkout = props => {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    })
    const [price, setPrice] = useState(0)


    useEffect(() => {
        const query = new URLSearchParams(props.location.search)
        const ing = {}
        for (let el of query) {
            if (el[0] === 'price') {
                setPrice(el[1])
            } else {
                ing[el[0]] = el[1] * 1
            }
        }
        setIngredients(ing)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <React.Fragment>
        <CheckoutSummary ingredients={ingredients} price={price} />
        <Route
            path={props.match.path + '/contact-data'}
            render={props => <ContactData
                {...props}
                ingredients={ingredients}
                price={price} />} />
    </React.Fragment>
}

export default Checkout
