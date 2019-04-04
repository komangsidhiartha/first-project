import {
  IS_ERROR,
  IS_LOADING,
  IS_SUCCESS, SELECT_PRODUCT
} from './constant'

const INITIAL_STATE = {
  products: [],
  selectedProduct: {},
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

    case SELECT_PRODUCT: {
      return {
        ...state,
        selectedProduct: action.selectedProduct
      }
    }

    default:
      return state
  }
}

export default productReducer
