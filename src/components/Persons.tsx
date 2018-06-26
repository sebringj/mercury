import React from 'react'
import Icon from 'react-native-vector-icons'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../store/actions'

import Person from '../components/Person'

interface PersonsProps {
  data: any[]
}

class Persons extends React.PureComponent<PersonsProps> {

  componentDidMount() {
    this.props.search()
  }

  _renderItem = ({item, index}) => {
    return <Person {...item} index={index} />
  }

  _keyExtractor = (item, index) => item.name

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const mapStateToProps = state => ({
  data: state.results
})

const mapDispatchToProps = dispatch => ({
  search: () => dispatch(actions.search())
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons)