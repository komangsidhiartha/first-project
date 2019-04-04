import { createStore } from 'redux'

import globalReducer from './reducer'

const store = createStore(globalReducer)

export default store
