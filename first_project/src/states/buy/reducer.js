import {BUY_IN_PROGRESS, BUY_IS_ERROR, BUY_IS_SUCCESS} from './constant'

const INITIAL_STATE = {
  buyStatus: {},
  buyPrice: {},
  isLoading: false,
  isError: false,
  errorReason: ''
}

const buyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorReason: ''
      }
    }

    case BUY_IS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        buyPrice: action.buyPrice,
        buyStatus: action.buyStatus
      }
    }

    case BUY_IS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorReason: action.errorReason
      }
    }

    default:
      return state
  }
}

export default buyReducer
