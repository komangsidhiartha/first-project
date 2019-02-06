import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {scaleHorizontalSize, scaleVerticalSize} from '../utils/ScaleProcessor'

export default class ProductItem extends React.PureComponent {
  render() {
    const { item } = this.props

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={[styles.itemContainerView, styles.itemContainerContentPositioning]}>
          <Image
            resizeMode='contain'
            source={{uri: item.image_url}}
            style={[styles.itemImageSize]}/>

          <Text style={[styles.itemTextSize, styles.itemTextPosition]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  _onPress = () => {
    this.props.onPress(this.props.item)
  }
}

const styles = StyleSheet.create({
  itemContainerView: {
    paddingLeft: scaleHorizontalSize(16),
    paddingRight: scaleHorizontalSize(16),
    paddingTop: scaleVerticalSize(8),
    paddingBottom: scaleVerticalSize(8),
    width: '100%'
  },
  itemContainerContentPositioning: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemImageSize: {
    height: scaleVerticalSize(75),
    aspectRatio: 1
  },
  itemTextSize: {
    fontSize: scaleVerticalSize(12)
  },
  itemTextPosition: {
    flex: 1,
    marginLeft: scaleHorizontalSize(16)
  }
})