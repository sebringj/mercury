import { createLogic } from 'redux-logic'
import { actions } from '../actions'
import axios from 'axios'

export const searchLogic = createLogic({
  type: actions.search,
  latest: true,
  process: async ({ httpClient, action, getState }, dispatch, done) => {
    const searchInput = (action.payload && action.payload.search) || ''
    try {
      const res = await axios(`https://swapi.co/api/people/?search=${encodeURIComponent(searchInput)}`)
      dispatch(actions.setResults({ results: res.data.results }))
    } catch (err) {
      console.error(err)
      dispatch(actions.error())
    }
    done()
  }
})

export default [searchLogic]