import { INCREMENT, DECREMENT, CLEAR_CART, REMOVE} from './cartTypes'
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
            if(state.amount <= 0){
                return {
                    ...state,
                   amount: 0
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
    
        case REMOVE: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        }
            
        default: return state ;
    }
}

export default cartReducer