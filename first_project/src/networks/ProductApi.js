import NetworkFacade from './NetworkFacade'

export default class ProductApi {
  static getHatList = (callback) => {
    NetworkFacade.get('list/hat', callback)
  }

  static getShirtList = (callback) => {
    NetworkFacade.get('list/shirt', callback)
  }

  static getJeansList = (callback) => {
    NetworkFacade.get('list/jeans', callback)
  }
}
