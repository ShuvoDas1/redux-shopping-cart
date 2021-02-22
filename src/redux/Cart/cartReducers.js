import { INCREMENT, DECREMENT, CLEAR_CART, REMOVE, GET_TOTALS} from './cartTypes'
import cartItems from '../../cart-items'
const initialCart = {
    cartItems: cartItems,
    amount: 0,
    total: 0
}

const cartReducer = (state = initialCart, action) =>{
    switch (action.type) {
        case INCREMENT:
            let tempCart = state.cartItems.map(item => {
                if(item.id === action.payload.id){
                    item = {...item, amount: item.amount + 1}
                }
                return item;
            })
            return {
                ...state,
                // amount: state.amount + 1,
                cartItems: tempCart
            }
        case DECREMENT:
                let tempCartDec = [];
                if(action.payload.amount === 1){
                    tempCartDec = state.cartItems.filter(item => item.id !== action.payload.id)
                }
                else{
                    tempCartDec = state.cartItems.map(item =>{
                        if(item.id === action.payload.id){
                            item = {...item, amount: item.amount - 1}
                        }
                        return item
                    })
                }

                return {
                    ...state,
                    // amount: state.amount - 1,
                    cartItems: tempCartDec
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
        case GET_TOTALS: {
            let {total, amount} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price, amount} = cartItem;
                const itemTotal = price*amount;
                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
                
            },
            {
                total: 0, 
                amount: 0
            })
            total = total.toFixed(2);
            return {
                ...state, 
                total,
                amount
            }
        }
            
        default: return state ;
    }
}

export default cartReducer