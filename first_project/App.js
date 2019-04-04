/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import AppNavigation from './src/navigations/AppNavigation'
import { Provider } from 'react-redux'
import store from './src/states/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigation />
      </Provider>
    )
  }
}
