import { createAction } from 'redux-actions'

export const clear = createAction('CLEAR')
export const search = createAction('SEARCH')
export const setResults = createAction('SET_RESULTS')
export const sort = createAction('SORT')
export const page = createAction('PAGE')
export const loading = createAction('LOADING')
export const error = createAction('ERROR')

export const actions = {
  clear, search, setResults, sort, page, loading, error
}