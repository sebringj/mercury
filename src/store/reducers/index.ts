import { handleActions } from 'redux-actions'
import { actions } from '../actions'
import _ from 'lodash'

const initialState = {
  search: '',
  sort: '',
  results: [],
  error: false,
  loading: false,
}
// little time left so its a bit sloppier as I'm going...

function sortAsc(a, b) {
  var nameA = a.name.toUpperCase()
  var nameB = b.name.toUpperCase()
  if (nameA < nameB)
    return -1
  if (nameA > nameB)
    return 1
  return 0
}

function sortDesc(a, b) {
  var nameA = a.name.toUpperCase()
  var nameB = b.name.toUpperCase()
  if (nameA < nameB)
    return 1
  if (nameA > nameB)
    return -1
  return 0
}

export default handleActions({
    [actions.clear]: (state = {}, action) => {
      return {
        ...state,
        ...{ search: '' }
      }
    },
    [actions.setResults]: (state, action) => {
      return {
        ...state,
        ...{ results: action.payload.results, loading: false, error: false }
      }
    },
    [actions.sort]: (state, action) => {
      const results = state.results || []
      let newResults
      if (action.payload.sort === 'asc')
        newResults = results.sort(sortAsc)
      else
        newResults = results.sort(sortDesc)
 
      return {
        ...state,
        ...{ sort: action.payload.sort, results: [...newResults] }
      }
    },
    // todo
    [actions.error]: (state, action) => {
      return {
        ...state,
        ...{ results: [], error: true, loading: false}
      }
    },
    [actions.loading]: (state, action) => {
      return {
        ...state,
        ...{ results: [], loading: true, error: false }
      }
    }
  },
  initialState
)