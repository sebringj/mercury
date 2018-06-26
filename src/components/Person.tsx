import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default props => {

  let species = (props.species && props.species.length) ? props.species[0] : ''
  let icon = 'question'
  if (species === 'https://swapi.co/api/species/1/')
    icon = 'user-circle'
  else if (species = 'https://swapi.co/api/species/2/')
    icon = 'android'

  const useLight = props.index % 2 === 0

  return (
    <View style={[styles.container, useLight ? {} : styles.containerDark ]}>
      <View style={styles.iconContainer}>
        <FontAwesome name={icon} color="#000" size={35} />
      </View>
      <View>
        <Text style={styles.title}>{props.name}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>HEIGHT: {props.height} <Text style={styles.square}>■ </Text></Text>
          <Text style={styles.detailText}>MASS: {props.mass} <Text style={styles.square}>■ </Text></Text>
          <Text style={styles.detailText}>GENDER: {props.gender}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = {
  container: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10
  },
  containerDark: {
    backgroundColor: '#efefef'
  },
  iconContainer: {
    width: 50,
    flex: -1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  title: {
    fontFamily: 'TitilliumWeb-ExtraLight',
    fontSize: 30,
    marginTop: -7,
    color: '#555',
  },
  detailContainer: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  detailText: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 12,
  },
  square: {
    fontSize: 8,
  }
}