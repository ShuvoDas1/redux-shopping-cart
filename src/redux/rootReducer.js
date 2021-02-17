import { combineReducers } from 'redux'
import cartReducers from './Cart/cartReducers'

const rootReducer = combineReducers({
    cart: cartReducers
})

export default rootReducer