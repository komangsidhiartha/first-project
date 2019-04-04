import ProductApi from '../../networks/ProductApi'
import {IS_ERROR, IS_LOADING, IS_SUCCESS, SELECT_PRODUCT} from './constant'

export const loadHats = (dispatch) => {
  ProductApi.getHatList((response, error) => {
    if (error) {
      dispatch(isError(error))
      return
    }

    if (!response.status) {
      dispatch(isError(response.message))
      return
    }

    dispatch(isSuccess(response))
  })

  return {
    type: IS_LOADING
  }
}

const isSuccess = (response) => {
  return {
    type: IS_SUCCESS,
    products: response.list
  }
}

const isError = (error) => {
  return {
    type: IS_ERROR,
    errorReason: error
  }
}

export const loadShirt = (dispatch) => {
  ProductApi.getShirtList((response, error) => {
    if (error) {
      dispatch(isError(error))
      return
    }

    if (!response.status) {
      dispatch(isError(response.message))
      return
    }

    dispatch(isSuccess(response))
  })

  return {
    type: IS_LOADING
  }
}

export const loadJeans = (dispatch) => {
  ProductApi.getJeansList((response, error) => {
    if (error) {
      dispatch(isError(error))
      return
    }

    if (!response.status) {
      dispatch(isError(response.message))
      return
    }

    dispatch(isSuccess(response))
  })

  return {
    type: IS_LOADING
  }
}

export const selectProduct = (product) => {
  return {
    type: SELECT_PRODUCT,
    selectedProduct: product
  }
}
