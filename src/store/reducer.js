import * as actionType from './actions'

const initialState = {
    ingredients: null,
    totalPrice: 4
}

const INGREDIENT_PRICES = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.SET_INITIAL_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.dataIngs.salad,
                    cheese: action.dataIngs.cheese,
                    bacon: action.dataIngs.bacon,
                    meat: action.dataIngs.meat
                }
            }

        case actionType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingType]
            }
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingType]
            }
        default:
            return state
    }

}

export default reducer