import { INCREMENT, DECREMENT, CLEAR_CART} from './cartTypes'
import cartItems from '../../cart-items'
const initialCart = {
    cartItems: cartItems,
    amount: 5,
    total: 0
}

const cartReducer = (state = initialCart, action) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                amount: state.amount + 1
            }
        case DECREMENT:
            if(state.numOfQty <= 0){
                return {
                    ...state,
                   amount: state.amount
                }
            }
            else{
                return {
                    ...state,
                    amount: state.amount - 1
                }
            }
        case CLEAR_CART: {
            return {
                ...state,
                cartItems: state.cartItems = [] 
            }
        }
            
        default: return state ;
    }
}

export default cartReducer