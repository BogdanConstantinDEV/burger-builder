import React, { useState } from 'react'

import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BuildControls'

const BurgerBuilder = () => {

    const INGREDIENT_PRICES = {
        salad: .5,
        cheese: .4,
        meat: 1.3,
        bacon: .7
    }

    const [stateIngredients, setStateIngredients] = useState({
        cheese: 0,
        salad: 0,
        meat: 0,
        bacon: 0
    })

    const [price, setPrice] = useState(4)

    const addIngredient = type => {
        const newIng = { ...stateIngredients }
        newIng[type] = newIng[type] += 1
        setStateIngredients(newIng)

        setPrice(price + INGREDIENT_PRICES[type])
    }
    const remIngredient = type => {
        if (stateIngredients[type] === 0) return

        const newIng = { ...stateIngredients }
        newIng[type] = newIng[type] -= 1
        setStateIngredients(newIng)

        setPrice(price - INGREDIENT_PRICES[type])
    }

    const disabledIng = { ...stateIngredients }
    for (let key in disabledIng) {
        disabledIng[key] = disabledIng[key] <= 0
    }

    return (
        <Aux>
            <Burger ingredients={stateIngredients} />
            <BurgerControls
                addItem={addIngredient}
                remItem={remIngredient}
                price={price}
                disabledInfo={disabledIng}
            />
        </Aux>
    )
}

export default BurgerBuilder