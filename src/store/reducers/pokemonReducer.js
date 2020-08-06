import { FETCH_POKEMONS } from '../actions/types'

const initialState = {
      data: [],
      loading: false
}

export default (state = initialState, action) => {
      switch (action.type) {

            case FETCH_POKEMONS:
                  return { loading: false, data: action.payload }

            default:
                  return state
      }
}
