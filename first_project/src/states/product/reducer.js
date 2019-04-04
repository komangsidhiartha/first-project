import {
  IS_ERROR,
  IS_LOADING,
  IS_SUCCESS
} from './constant'

const INITIAL_STATE = {
  products: [],
  isLoading: false,
  isError: false,
  errorReason: ''
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorReason: ''
      }
    }

    case IS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: action.products
      }
    }

    case IS_ERROR: {
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
};


export default productReducer
