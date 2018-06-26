import React from 'react'
import Icon from 'react-native-vector-icons'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Search from './Search'
import Sort from './Sort'

export default () => {
  return (
    <View style={styles.container}>
      <Search />
      <Sort />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: -1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
})
