import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import ProductApi from '../networks/ProductApi'
import FlatList from '../viewItems/FlatListFacade'

const apis = ["getHatList", "getShirtList", "getJeansList"]

export default class ListProductScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      isLoading: true
    }

    this.loadProductList()
  }

  generatePageIndex = () => {
    const {key} = this.props.navigation.state
    return parseInt(key.substr(-1))
  }

  loadProductList = () => {
    const index = this.generatePageIndex()
    let method = apis[index]

    ProductApi[method](this.handleApiResponse)
  }

  handleApiResponse = (response, error) => {
    if (error) {
      alert(`error: ${error}`)
      return
    }

    if (!response.status) {
      alert('error: status false')
      return
    }

    this.setState({
      products: response.list,
      isLoading: false
    })
  }

  render() {
    return this._renderListOrLoading()
  }

  _renderListOrLoading = () => {
    if (this.state.isLoading) {
      return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    }

    return <FlatList
      data={this.state.products}
      onPressItem={this._onItemClick} />
  }

  _onItemClick = (item) => {
    this.props.navigation.navigate("Detail", {product: item})
  }
}