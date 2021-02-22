import { INCREMENT, DECREMENT, CLEAR_CART, REMOVE, GET_TOTALS} from './cartTypes'

export const increment = (id,amount) =>{
    return {
        type: INCREMENT,
        payload: {
            id: id,
            amount : amount
        }
    }
}

export const decrement = (id, amount) =>{
    return {
        type: DECREMENT,
        payload: {
            id: id,
            amount: amount
        }
    }
}

export const clearCart = () =>{
    return {
        type: CLEAR_CART
    }
}

export const remove = id =>{
    return {
        type: REMOVE,
        payload: {id}
    }
}

export const getTotals = () =>{
    return {
        type: GET_TOTALS,
        
    }
}