import React from 'react'
import Icon from 'react-native-vector-icons'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { actions } from '../store/actions'

class Sort extends React.PureComponent {

  _changeSort = () => {
    if (this.props.sort === '' || this.props.sort === 'asc')
      this.props.setSort('desc')
    else
      this.props.setSort('asc')
  }

  render() {

    let label = <Text style={styles.sortText}>Sort results...</Text>
    let arrow = <FontAwesome name="chevron-down" color="#ccc" size={12} />
    if (this.props.sort === 'asc') {
      label = <Text style={styles.sortedText}>A-Z</Text>
      arrow = <FontAwesome name="chevron-down" color="#333" size={12} />
    } else if (this.props.sort === 'desc') {
      label = <Text style={styles.sortedText}>Z-A</Text>
      arrow = <FontAwesome name="chevron-up" color="#333" size={12} />
    }

    return (
      <TouchableHighlight onPress={this._changeSort}>
        <View style={styles.container}>
          {label}
          {arrow}
        </View>
      </TouchableHighlight>
    )
  }
}

const mapStateToProps = state => ({
  sort: state.sort
})

const mapDispatchToProps = dispatch => ({
  setSort: sort => dispatch(actions.sort({ sort: sort }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort)

const styles = {
  container: {
    height: 30,
    width: 100,
    borderWidth: 1,
    borderColor: '#777',
    paddingLeft: 5,
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5
  },
  sortText: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 12,
    color: '#ccc',
  },
  sortedText: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 12,
    color: '#333',
  }
}