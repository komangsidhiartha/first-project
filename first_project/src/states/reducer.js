import { combineReducers } from 'redux'

import product from './product/reducer'
import buy from './buy/reducer'

export default combineReducers({
  product, buy
})
