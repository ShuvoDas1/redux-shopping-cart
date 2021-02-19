import { INCREMENT, DECREMENT, CLEAR_CART, REMOVE} from './cartTypes'

export const increment = () =>{
    return {
        type: INCREMENT
    }
}

export const decrement = () =>{
    return {
        type: DECREMENT
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
        payload: id
    }
}