import React from 'react'
import { FlatList } from 'react-native'
import ProductItem from './ProductItem'

export default class FlatListFacade extends React.PureComponent {
  render() {
    const { data } = this.props

    return (
      <FlatList
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }

  _keyExtractor = (item, _) => `${item.id}`

  _renderItem = (item) => {
    const { onPressItem } = this.props
    return (
      <ProductItem
        item={ item.item }
        onPress={ onPressItem }
      />
    )
  }
}
