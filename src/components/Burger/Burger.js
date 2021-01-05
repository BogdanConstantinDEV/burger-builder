import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {

    let ingredients = Object.keys(props.ingredients)
        .map(el => ([...Array(props.ingredients[el])]
            .map(() => <BurgerIngredient key={Math.random()} type={el} />)))
        .reduce((acc, curr) => acc.concat(curr), [])
    if (ingredients.length === 0) { ingredients = <h3>Add Ingredients</h3> }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger