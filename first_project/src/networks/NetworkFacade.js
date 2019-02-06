const BaseUrl = "http://demo9618857.mockable.io"

export default class NetworkFacade {
  static get = (partUrl, callback) => {
    fetch(BaseUrl + "/" + partUrl)
      .then(response => response.json())
      .then(data => {
        callback(data, null)
      })
      .catch(error => {
        callback(null, error)
      })
  }
}