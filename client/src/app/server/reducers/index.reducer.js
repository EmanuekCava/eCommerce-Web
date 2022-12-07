import { combineReducers } from "redux";

import products from './products.reducer'
import sugestions from './sugestions.reducer'

export default combineReducers({
    products,
    sugestions
})