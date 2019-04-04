import React from 'react'
import {
  ActivityIndicator,
  View
} from 'react-native'

import FlatList from '../viewItems/FlatListFacade'

import {
  loadHats,
  loadJeans,
  loadShirt,
  selectProduct
} from '../states/product/actions'
import { connect } from 'react-redux'

class ListProductScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: true
    }

    this.loadProductList()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.isVisible || nextState.isVisible || false
  }

  componentDidMount () {
    this.subs = [
      this.props.navigation.addListener('willFocus', (payload) => this.componentWillFocus()),
      this.props.navigation.addListener('willBlur', (payload) => this.componentWillBlur())
    ]
  }

  componentWillUnmount () {
    if (this.subs) {
      this.subs.forEach((sub) => sub.remove())
    }
  }

  componentWillFocus () {
    this.setState({ isVisible: true })
    this.loadProductList()
  }

  componentWillBlur () {
    this.setState({ isVisible: false })
  }

  loadProductList = () => {
    const index = this.generatePageIndex()

    switch (index) {
      case 0: {
        this.props.dispatchLoadHats()
        break
      }

      case 1: {
        this.props.dispatchLoadShirt()
        break
      }

      case 2: {
        this.props.dispatchLoadJeans()
        break
      }
    }
  }

  generatePageIndex = () => {
    const { key } = this.props.navigation.state
    return parseInt(key.substr(-1))
  }

  render() {
    return this._renderListOrLoading()
  }

  _renderListOrLoading = () => {
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <FlatList
        data={ this.props.products }
        onPressItem={ this._onItemClick }
      />
    )
  }

  _onItemClick = (item) => {
    this.props.dispatchSelectProduct(item)
    this.props.navigation.navigate("Detail")
  }
}

const mapsStateToProps = (state) => {
  return {
    products: state.product.products,
    isLoading: state.product.isLoading,
    isError: state.product.isError,
    errorReason: state.product.errorReason
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    dispatchLoadHats: () => dispatch(loadHats(dispatch)),
    dispatchLoadShirt: () => dispatch(loadShirt(dispatch)),
    dispatchLoadJeans: () => dispatch(loadJeans(dispatch)),
    dispatchSelectProduct: (product) => dispatch(selectProduct(product))
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(ListProductScreen)
