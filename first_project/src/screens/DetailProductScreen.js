import React from 'react'
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  scaleHorizontalSize,
  scaleVerticalSize
} from '../utils/ScaleProcessor'

export default class DetailProductScreen extends React.Component {
  render() {
    const product = this.props.navigation.getParam('product', {})

    return (
      <View style={[ styles.detailContainerView, styles.detailContainerContentPositioning ]}>
        <Image
          resizeMode='contain'
          source={{ uri: product.image_url }}
          style={ styles.detailImageSize }
        />
        <Text style={[ styles.detailTitleTextSize, styles.detailTextPosition ]}>
          { product.name }
        </Text>

        <Text style={[ styles.detailPriceTextSize, styles.detailTextPosition ]}>
          { product.price }
        </Text>

        <Text style={[ styles.detailDescriptionTextSize, styles.detailTextPosition ]}>
          { product.description }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  detailContainerView: {
    paddingLeft: scaleHorizontalSize(16),
    paddingRight: scaleHorizontalSize(16),
    paddingTop: scaleVerticalSize(8),
    paddingBottom: scaleVerticalSize(8),
    width: '100%',
    height: '100%'
  },
  detailContainerContentPositioning: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  detailImageSize: {
    width: '80%',
    aspectRatio: 1
  },
  detailTitleTextSize: {
    fontSize: scaleVerticalSize(15),
    fontWeight: 'bold'
  },
  detailPriceTextSize: {
    fontSize: scaleVerticalSize(13),
    fontWeight: "700",
    fontStyle: 'italic'
  },
  detailDescriptionTextSize: {
    fontSize: scaleVerticalSize(12)
  },
  detailTextPosition: {
    marginLeft: scaleHorizontalSize(16),
    marginTop: scaleVerticalSize(4)
  }
})
