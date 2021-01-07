import React, { useState } from 'react'

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderInfo from '../../components/Burger/OrderInfo/OrderInfo'

const BurgerBuilder = () => {

    const INGREDIENT_PRICES = {
        salad: .5,
        cheese: .4,
        meat: 1.3,
        bacon: .7
    }


    // <<<<<    STATE   >>>>> ==>>

    const [stateIngredients, setStateIngredients] = useState({
        cheese: 0,
        salad: 0,
        meat: 0,
        bacon: 0
    })

    const [price, setPrice] = useState(4)

    const [showOrder, setShowOrder] = useState(false)

    // <<<<<       >>>>> <<==


    // add ingredient to burger
    const addIngredient = type => {
        const newIng = { ...stateIngredients }
        newIng[type] = newIng[type] += 1
        setStateIngredients(newIng)

        setPrice(price + INGREDIENT_PRICES[type])
    }

    // remove ingredient from burger
    const remIngredient = type => {
        if (stateIngredients[type] === 0) return

        const newIng = { ...stateIngredients }
        newIng[type] = newIng[type] -= 1
        setStateIngredients(newIng)

        setPrice(price - INGREDIENT_PRICES[type])
    }

    // disable less button if ingredient < 0
    const disabledIng = { ...stateIngredients }
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

    // continue with order
    const continueOrder = () => {
        alert('You have chosen well son!!😉')
        hideOrder()
    }

    return (
        <Aux>
            <Modal trigger={showOrder} closeBack={hideOrder}>
                <OrderInfo
                    ingredients={stateIngredients}
                    cancelPurcashe={hideOrder}
                    continuePurcashe={continueOrder}
                    price={price}
                />
            </Modal>
            <Burger ingredients={stateIngredients} />
            <BurgerControls
                addItem={addIngredient}
                remItem={remIngredient}
                price={price}
                disabledInfo={disabledIng}
                viewOrder={viewOrder}
            />
        </Aux>
    )
}

export default BurgerBuilder