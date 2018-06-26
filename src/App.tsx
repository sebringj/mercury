import React from 'react'
import {
  Platform,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import Icon from 'react-native-vector-icons'

import Header from 'app/components/Header'
import Persons from 'app/components/Persons'

const store = configureStore()

export default class App extends React.PureComponent<any> {

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Header />
          <Persons />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 40,
    margin: 20,
  },
})
