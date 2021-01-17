import React, { useState, useEffect } from 'react'

import axios from '../../axios-orders'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderInfo from '../../components/Burger/OrderInfo/OrderInfo'
import Spinner from '../../components/UI/Spinner/Spinner'

const BurgerBuilder = () => {

    const INGREDIENT_PRICES = {
        salad: .5,
        cheese: .4,
        meat: 1.3,
        bacon: .7
    }


    // <<<<<    STATE   >>>>> ==>>

    const [ingredients, setIngredients] = useState(null)
    const [price, setPrice] = useState(4)
    const [showOrder, setShowOrder] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // <<<<<       >>>>> <<==


    // render content by ingredients from db
    useEffect(() => {
        axios.get('/ingredients')
            .then(res => setIngredients(res.data))
            .catch(err => setError(err))
    }, [])


    // add ingredient to burger
    const addIngredient = type => {
        const newIng = { ...ingredients }
        newIng[type] = newIng[type] += 1
        setIngredients(newIng)

        setPrice(price + INGREDIENT_PRICES[type])
    }

    // remove ingredient from burger
    const remIngredient = type => {
        if (ingredients[type] === 0) return

        const newIng = { ...ingredients }
        newIng[type] = newIng[type] -= 1
        setIngredients(newIng)

        setPrice(price - INGREDIENT_PRICES[type])
    }

    // disable less button if ingredient < 0
    const disabledIng = { ...ingredients }
    for (let key in disabledIng) {
        disabledIng[key] = disabledIng[key] <= 0
    }

    // make order visible
    const viewOrder = () => {
        setShowOrder(true)
    }

    // hide order
    const hideOrder = () => {
        setShowOrder(false)
    }



    // continue purcashe
    const continuePurcashe = () => {
        setLoading(true)
        const orderData = {
            ingredients: ingredients,
            price,
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
            .then(() => setLoading(false))
            .catch(() => setLoading(false))
        hideOrder()
    }


    // render content after recive res from db
    let orderInfo = null
    let burger = error ? 'This error is big as fuck' : <Spinner />
    if (ingredients) {
        orderInfo = <OrderInfo
            ingredients={ingredients}
            cancelPurcashe={hideOrder}
            continuePurcashe={continuePurcashe}
            price={price} />
        burger =
            <Aux>
                <Burger ingredients={ingredients} />
                <BurgerControls
                    addItem={addIngredient}
                    remItem={remIngredient}
                    price={price}
                    disabledInfo={disabledIng}
                    viewOrder={viewOrder} />
            </Aux>
    }

    return (
        <Aux>
            <Modal show={showOrder} closeBack={hideOrder}>
                {loading ? <Spinner /> : orderInfo}
            </Modal>
            {burger}
        </Aux>
    )
}

export default withErrorHandler(BurgerBuilder, axios) 