import React, { useState, useEffect } from 'react'
import axios from '../../axios-orders'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import { connect } from 'react-redux'

import * as actionType from '../../store/actions'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderInfo from '../../components/Burger/OrderInfo/OrderInfo'
import Spinner from '../../components/UI/Spinner/Spinner'

const BurgerBuilder = props => {



    // <<<<<    STATE   >>>>> ==>>

    const [showOrder, setShowOrder] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // <<<<<       >>>>> <<==


    // render content by ingredients from db
    useEffect(() => {
        setLoading(true)
        axios.get('/ingredients.json')
            .then(res => {
                props.onSetInitialIngredients(res.data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    // disable order button if no ingredient added
    const disableOrderButton = () => {
        const ingsNum = []
        for (let key in props.ings) {
            ingsNum.push(props.ings[key])
        }
        const sum = ingsNum.reduce((acc, curr) => acc + curr, 0)
        return sum <= 0
    }


    // disable less button if ingredient < 0
    const disabledIng = { ...props.ings }
    for (let key in disabledIng) {
        disabledIng[key] = disabledIng[key] <= 0
    }

    // make order visible
    const viewOrder = () => setShowOrder(true)

    // hide order
    const hideOrder = () => setShowOrder(false)

    // CONTINUE PURCASHE  ======>>
    const continuePurcashe = () => props.history.push('/checkout')


    // render content after recive res from db
    let orderInfo = <Spinner />
    let burger = error ? 'This error is big as fuck' : <Spinner />
    if (props.ings) {
        orderInfo = <OrderInfo
            ingredients={props.ings}
            cancelPurcashe={hideOrder}
            continuePurcashe={continuePurcashe}
            price={props.prc} />
        burger =
            <Aux>
                <Burger ingredients={props.ings} />
                <BurgerControls
                    addItem={props.onAddIngredient}
                    remItem={props.onRemoveIngredient}
                    price={props.prc}
                    disabledInfo={disabledIng}
                    orderBtn_Disabled={disableOrderButton()}
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



// REDUX maps ====== -->

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        prc: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSetInitialIngredients: dataIngs => dispatch({ type: actionType.SET_INITIAL_INGREDIENTS, dataIngs }),
        onAddIngredient: ingType => dispatch({ type: actionType.ADD_INGREDIENT, ingType }),
        onRemoveIngredient: ingType => dispatch({ type: actionType.REMOVE_INGREDIENT, ingType })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios)) 