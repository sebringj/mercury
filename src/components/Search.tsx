import React from 'react'
import Icon from 'react-native-vector-icons'
import {
  Platform,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../store/actions'
import _ from 'lodash'

class Search extends React.PureComponent {

  _onChangeText = _.debounce(text => {
    this.props.onChange(text)
  }, 150)

  render() {

    console.warn(JSON.stringify(this.props.data, null, 2))

    return (
      <TextInput
        style={styles.textInput}
        placeholder="Search..."
        value={this.props.search}
        onChangeText={this._onChangeText}
      />
    )
  }
}
const mapStateToProps = state => ({
  search: state.search
})

const mapDispatchToProps = dispatch => ({
  onChange: text => dispatch(actions.search({ search: text }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

const styles = StyleSheet.create({
  container: {

  },
  textInput: {
    height: 30,
    width: 150,
    borderWidth: 1,
    borderColor: '#777',
    fontFamily: 'TitilliumWeb-Bold',
    paddingLeft: 5
  }
})