import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import ListProductScreen from '../screens/ListProductScreen'
import DetailProductScreen from '../screens/DetailProductScreen'

const ProductStack = createStackNavigator({
  List: ListProductScreen,
  Detail: DetailProductScreen
})

export default createBottomTabNavigator({
  Hat: ProductStack,
  Shirt: ProductStack,
  Jeans: ProductStack
})